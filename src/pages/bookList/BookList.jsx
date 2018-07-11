import React, { Component } from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import Loading from '@/components/loading/Loading';
import LoadingUpdate from '@/components/loadingUpdate/LoadingUpdate';
import ReactRefreshScroll from '@/components/reactRefreshScroll/ReactRefreshScroll';
import { withStyles } from '@material-ui/core/styles';
import { Grade } from '@material-ui/icons';
import { styles } from './BookListCss';
import Utils from '@/utils/util';

class BookList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingShow: true,
      searchObj: Utils.getQueryStringArgs(this.props.history.location.search),
      bookList: [],
      pageCount: 10,
      startCount: 0,
      total: 0,
      isToBottom: false,
      isFetching: false
    }
  }

  fetchData (params) {
    this.setState({isFetching: false});
    Utils.get('/search', params).then(res => {
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
      let params = {};
      if (this.state.searchObj.q) {
        params = {
          q: this.state.searchObj.q,
          start: this.state.startCount,
          count: 10,
        };
      } else {
        params = {
          tag: this.state.searchObj.tag,
          start: this.state.startCount,
          count: 10
        };
      }
      this.fetchData(params);
    }
  }

  setStarRate (classes, average) {
    let starItemArr = [];
    let starCount = Math.floor(5 * average / 10);
    for (let i = 0; i < starCount; i++) {
      starItemArr.push(<Grade  className={classes.starActive} key={i}/>)
    }
    for (let j = 0; j < 5 - starCount; j++) {
      starItemArr.push(<Grade key={4 - j}/>)
    }
    return starItemArr;
  }

  entoDetailPage (id) {
    return () => {
      this.props.history.push(`/bookDetail?id=${id}`);
    }
  }

  componentDidMount () {
    // q: 豆瓣api关键字；tag: 豆瓣api标签
    if (this.state.searchObj.q) {
      this.fetchData({
        q: this.state.searchObj.q,
        start: this.state.startCount,
        count: 10,
      });
    } else {
      this.fetchData({
        tag: this.state.searchObj.tag,
        start: this.state.startCount,
        count: 10
      });
    }
  }

  render () {
    const { classes } = this.props;
    let {
      loadingShow,
      searchObj,
      bookList,
      isToBottom
    } = this.state;
    let bookListData = [];
    bookList.map((item, index) => {
      return bookListData.push(
        <div
          className={classes.bookListItem}
          key={index}
          onClick={this.entoDetailPage(item.id)}>
            <div className={classes.bookListImg}><img src={item.images.small} alt={item.title}/></div>
            <div className={classes.bookListCnt}>
              <div className={classes.blTitle}>{item.title}<span>图书</span></div>
              <div className={classes.blAuthor}>
                {
                  item.author.map(item => {
                    return item;
                  })
                }
              </div>
              <div className={classes.starRate}>
                <div className={classes.starCnt}>
                  {this.setStarRate(classes, item.rating.average)}
                </div>
                {
                  item.rating.numRaters > 10 ? (
                    <div className={classes.starText}><span>{item.rating.average}</span> {item.rating.numRaters} 评价</div>
                  ) : (
                    <div className={classes.starText}>少于 10 人评价</div>
                  )
                }
              </div>
              <div className={classes.blDesc}>{item.summary}</div>
              {
                <div className={classes.blPrice}>￥{item.price.replace(/[^0-9.]/g, '')}</div>
              }
            </div>
        </div>
      );
    })

    return (
      <div className={classes.pageContent}>
        <ToolBar history={this.props.history} showBack={true} text={searchObj.q || searchObj.tag}/>
        <ReactRefreshScroll
          handleToBottom={this.loadMore}
        >
          {bookListData}
          {isToBottom && <LoadingUpdate type='up' />}
        </ReactRefreshScroll>
        {loadingShow && <Loading/>}
      </div>
    )
  }
}

export default withStyles(styles)(BookList);
