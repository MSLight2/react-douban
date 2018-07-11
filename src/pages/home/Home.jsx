import React from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import NavigationBar from "@/components/navigationbar/NavigationBar";
import Loading from '@/components/loading/Loading';
import LoadingUpdate from '@/components/loadingUpdate/LoadingUpdate';
import ReactRefreshScroll from '@/components/reactRefreshScroll/ReactRefreshScroll';
import BookItem from "@/components/bookItem/BookItem";
import HoverBtn from '@/components/hoverBtn/HoverBtn';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './HomeCss';
import Utils from '@/utils/util';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.homeRef = React.createRef();
    this.state = {
      loadingShow: true,
      toTopBtnShow: false,
      bookList: [],
      pageCount: 10,
      startCount: 0,
      total: 0,
      isToBottom: false,
      isFetching: false
    }
  }
  
  componentDidMount () {
    this.fetchData();
  }

  fetchData (tag = '推荐', pageCount = 10) {
    this.setState({isFetching: false});
    Utils.get('/search', {
      tag: tag,
      start: this.state.startCount,
      count: pageCount
    }).then(res => {
      if (this.state.startCount >= res.total) {
        this.setState({isToBottom: false});
        return;
      }
      this.setState({
        isFetching: true,
        bookList: this.state.bookList.concat(res.books),
        loadingShow: false,
        total: res.total
      });
    })
  }

  // 滚动到底部，加载更多
  loadMore = () => {
    if (!this.state.isFetching) return;
    let {
      startCount,
      pageCount,
      total
    } = this.state;
    let nextStartCount = startCount + pageCount;
    if (nextStartCount >= total) {
      this.setState({isToBottom: false});
    } else {
      this.setState({
        isToBottom: true,
        startCount: nextStartCount
      });
      this.fetchData();
    }
  }

  // 下拉刷新
  handlePullDown = () => {
    this.setState({
      loadingShow: false,
      bookList: [],
      startCount: 0,
      isToBottom: false,
      toTopBtnShow: false
    });
    return new Promise((resolve, reject) => {
      Utils.get('/search', {
        tag: '推荐',
        start: 0,
        count: 10
      }).then(res => {
        this.setState({
          bookList: res.books,
          loadingShow: false,
          total: res.total
        });
        resolve()
      })
    })
  }

  // 显示回到顶部按钮
  _handleScrollDistance = () => {
    if (this.state.toTopBtnShow) return;
    this.setState({toTopBtnShow: true});
  }

  // 回到顶部
  handleToTop = () => {
    this.homeRef.current.scrollIntoView(true);
    this.setState({toTopBtnShow: false});
  }

  render () {
    const { classes } = this.props;
    const {
        bookList,
        loadingShow,
        isToBottom,
        toTopBtnShow
      } = this.state;
    let listArr = [];
    if (bookList.length > 0) {
      bookList.map((item, index) => {
        if (index > 0) {
          listArr.push(
            <BookItem
              history={this.props.history}
              marginTop={true}
              data={item}
              key={index}
            />
          );
        } else {
          listArr.push(
            <BookItem history={this.props.history} data={item} key={index} />
          );
        }
        return listArr;
      })
    }
    return (
      <div className={classes.pageContent} ref={this.homeRef}>
        <ToolBar
          history={this.props.history}
          showCategory={true}
          showSearch={true}
          text='豆瓣阅读'
        />
        <ReactRefreshScroll
          handleToBottom={this.loadMore}
          overflowHeight={112}
          handlePullRefresh={this.handlePullDown}
          isUpload={true}
          handleScrollDistance={this._handleScrollDistance}
        >
          {listArr}
          {isToBottom && <LoadingUpdate type='up' />}
          {toTopBtnShow && <HoverBtn handleClick={this.handleToTop} />}
        </ReactRefreshScroll>
        <NavigationBar history={this.props.history} />
        {loadingShow && <Loading/>}
      </div>
    )
  }
}

export default withStyles(styles)(Home);