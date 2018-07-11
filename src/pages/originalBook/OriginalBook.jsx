import React, { Component } from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import Loading from '@/components/loading/Loading';
import BookItem from "@/components/bookItem/BookItem";
import LoadingUpdate from '@/components/loadingUpdate/LoadingUpdate';
import ReactRefreshScroll from '@/components/reactRefreshScroll/ReactRefreshScroll';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './OriginalBookCss';
import HootBook from '@/components/hootBook/HootBook';
import Utils from '@/utils/util';

class OriginalBook extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingShow: true,
      searchObj: Utils.getQueryStringArgs(this.props.history.location.search),
      bookList: [],
      hootList: [],
      pageCount: 10,
      startCount: 0,
      total: 0,
      isToBottom: false,
      isFetching: false
    }
  }

  fetchData (pageCount = 10, fn) {
    this.setState({isFetching: false});
    Utils.get('/search', {
      tag: this.state.searchObj.tag,
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
      if (fn) {
        fn();
      }
    })
  }

  fetchHootData (params) {
    Utils.get('/search', params).then(res => {
      this.setState({hootList: res.books, loadingShow: false});
    })
  }

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

  componentDidMount () {
    this.fetchData(10, () => {
      this.fetchHootData({
        q: this.state.searchObj.tag,
        tag: '热门',
        count: 7
      });
    });
  }

  render () {
    const { classes } = this.props;
    let {
        loadingShow,
        searchObj,
        bookList,
        hootList,
        isToBottom
      } = this.state;
    let bookListData = [];
    if (bookList.length > 0) {
      bookList.map((item, index) => {
        if (index > 0) {
          bookListData.push(<BookItem history={this.props.history} marginTop={true} data={item} key={index} />);
        } else {
          bookListData.push(<BookItem history={this.props.history} data={item} key={index} />);
        }
        return bookListData;
      })
    }
    return (
      <div className={classes.pageContent}>
        <ToolBar history={this.props.history} showBack={true} text={searchObj.tag}/>
        <ReactRefreshScroll
          handleToBottom={this.loadMore}
        >
          {bookListData.slice(0,3)}
          <HootBook history={this.props.history} data={hootList} />
          {bookListData.length > 3 && bookListData.slice(3)}
          {isToBottom && <LoadingUpdate type='up' />}
        </ReactRefreshScroll>
        {loadingShow && <Loading/>}
      </div>
    )
  }
}

export default withStyles(styles)(OriginalBook);
