import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import {
  Grade,
  StarBorder,
  ExpandMore,
  List,
  ThumbUp,
  Sms,
  Sort,
  CardGiftcard,
  ShoppingCart
} from '@material-ui/icons';
import { styles } from './BookDetailCss';
import ToolBar from "@/components/toolBar/ToolBar";
import Loading from '@/components/loading/Loading';
import Utils from '@/utils/util';
import { connect } from 'react-redux'
import { addId } from '@/redux/action/carAction';

let timeOut = null;

class BookDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingShow: false,
      dialogOpen: false,
      dialogContent: '添加成功',
      moreDescSummary: true,
      moreCatelog: true,
      bookData: {},
      mayYouLikeList: []
    }
  }

  componentDidMount () {
    this.fetchData((res) => {
      this.fetchMayYouLikeData(res)
    })
  }

  fetchData (fn) {
    const searchObj = Utils.getQueryStringArgs(this.props.history.location.search);
    Utils.get(`/${searchObj.id}`).then(res => {
      this.setState({bookData: res, loadingShow: false});
      fn(res)
    })
  }

  fetchMayYouLikeData (data) {
    let tag = data.tags.length > 0 ? data.tags[0].name : '推荐'
    Utils.get('/search', {tag: tag, count: 3}).then(res => {
      this.setState({mayYouLikeList: res.books});
    })
  }

  // 设置星星等级
  setStarRate (classes, average) {
    let starItemArr = [];
    let starCount = Math.floor(5 * average / 10);
    for (let i = 0; i < starCount; i++) {
      starItemArr.push(<Grade className={classnames(classes.starRateStar, classes.active)} key={i} />)
    }
    for (let j = 0; j < 5 - starCount; j++) {
      starItemArr.push(<Grade className={classes.starRateStar} key={4 - j} />)
    }
    return starItemArr;
  }

  // may you like 模块
  mayYouLikeComponent (dataArr, classes = this.props.classes) {
    let dataList = [];
    if (dataArr.length > 0) {
      dataArr.map((item, index) => {
        return dataList.push(
          <div
            className={classes.bookItem}
            key={index}
            onClick={this.entoDetailPage(item.id)}>
            <img src={item.images.small} alt={item.title}/>
            <div className={classes.biTitle}>{item.title}</div>
            <div className={classes.biAuthor}>
              {
                item.author.map(item => {
                  return item;
                })
              }
            </div>
          </div>
        );
      })
    }
    return dataList;
  }

  // 更多
  moreClick (type) {
    if (type === 'summary') {
      this.setState({moreDescSummary: false});
    } else if (type === 'catelog') {
      this.setState({moreCatelog: false});
    }
  }

  // 送礼
  giveAGift = () => {
    this.setDialogCnt('送礼？不存在的，这辈子都不可能送礼。汪汪汪！！！', 3000);
  }

  // 购买
  buyBook (id) {
    return () => {
      this.props.dispatch(addId(id));
      this.setDialogCnt('购物车添加成功！完美~O(∩_∩)O~', 2500);
    }
  }

  // 试读
  trialReading = () => {
    this.setDialogCnt('试读先打卡╭(╯^╰)╮，滴！老年卡...', 2500);
  }

  setDialogCnt = (content = '添加成功', time = 2500) => {
    this.setState({
      dialogOpen: true,
      dialogContent: content
    })
    timeOut = setTimeout(() => {
      this.setState({dialogOpen: false})
    }, time)
  }

  entoBookListPage (tag) {
    return () => {
      this.props.history.push(`/bookList?tag=${tag}`);
    }
  }

  entoDetailPage (id) {
    return () => {
      this.props.history.replace(`/bookDetail?id=${id}`);
      this.setState({
        loadingShow: true,
        moreDescSummary: true,
        moreCatelog: true
      });
      this.pageElem.scrollIntoView(true)
      this.fetchData((res) => {
        this.fetchMayYouLikeData(res)
      })
    }
  }

  entoCartPage = () => {
    this.props.history.push('/cart');;
  }

  handleDialogClose = () => {
    if (timeOut) clearTimeout(timeOut);
    this.setState({dialogOpen: false})
  }

  render () {
    const { classes } = this.props;
    const {
      loadingShow,
      bookData,
      mayYouLikeList,
      moreDescSummary,
      moreCatelog,
    } = this.state;
    if (!bookData.title) {
      return '';
    }
    let catelog = bookData.catalog.split(/[\r\n]/);
    return (
      <div className={classes.pageContent} ref={elem => this.pageElem = elem}>
        <ToolBar history={this.props.history} showBack={true} showShare={true} text='电子书'/>
        {/* 详情 */}
        <div className={classes.bookDesc}>
          <div className={classes.bookLeft}>
            <div className={classes.bookTitle}>{bookData.title}</div>
            <div className={classes.bookTitleDesc}>{bookData.summary}</div>
            <div className={classes.bookRate}>
              <div className={classes.rateStar}>
                <div>{this.setStarRate(classes, bookData.rating.average)}</div>
                {
                  bookData.rating.numRaters > 10 ? (
                    <span className={classes.bookRateLevel}>
                      <span>{bookData.rating.average}</span> {bookData.rating.numRaters} 评价
                    </span>
                  ) : (<span>少于 10 人评价</span>)
                }
              </div>
              <div className={classes.rateLevel}>
                <Grade className={classes.levelStar} />
                <span> {bookData.rating.average}</span> {bookData.rating.numRaters} 评价 | 豆瓣读书
              </div>
            </div>
            <div className={classes.otherCnt}>{bookData.author[0]} 著</div>
            {
              bookData.translator.length > 0 ? <div className={classes.otherCnt}>{bookData.translator[0]} 译</div> : ''
            }
            {
              bookData.tags.length > 0 && <div className={classes.otherCnt}>图书 / {bookData.tags[0].name}</div>
            }
            {
              bookData.publisher && <div className={classes.otherCnt}>{bookData.publisher} / {bookData.pubdate}</div>
            }
            <div className={classes.otherCnt}>约 {bookData.pages} 页</div>
            {
              /[^0-9.]/g.test(bookData.price) ? (
                <div className={classes.bookPrice}>{bookData.price}</div>
              ) : (
                <div className={classes.bookPrice}>￥{bookData.price}</div>
              )
            }
          </div>
          <div className={classes.bookRight}>
            <img src={bookData.images.small} alt={bookData.title}/>
          </div>
        </div>
        {/* 简介 */}
        <div className={classes.itemBox}>
          <div className={classes.topTitle}>简介</div>
          <p className={classes.introduceDesc}>
            <StarBorder className={classes.txtStar} />
            {
              moreDescSummary ? `${bookData.summary.substring(0, 100)}...` : bookData.summary
            }
          </p>
          {
            moreDescSummary ? (
              <div
                className={classes.moreBtn}
                onClick={this.moreClick.bind(this, 'summary')}>
                <ExpandMore />
              </div>
            ) : ''
          }
        </div>
        {/* 目录 */}
        <div className={classes.itemBox}>
          <div className={classes.topTitle}>目录</div>
          <ul>
            {
              moreCatelog ? (
                catelog.slice(0,5).map((item, index) => {
                  return (<li key={index}>{item}</li>)
                })
              ) : (
                catelog.map((item, index) => {
                  return (<li key={index}>{item}</li>)
                })
              )
            }
          </ul>
          {
            moreCatelog ? (
              <div
                className={classes.moreBtn}
                onClick={this.moreClick.bind(this, 'catelog')}>
                <ExpandMore />
              </div>
            ) : ''
          }
        </div>
        {/* 出版方 */}
        <div className={classes.itemBox}>
          <div className={classes.topTitle}>出版方</div>
          <div className={classes.publisher}>
            <img src="" alt=""/>
            <span>{bookData.publisher}</span>
          </div>
          <p className={classes.introduceDesc}>2002年6月，上海世纪出版股份有限公司在北京成立其分支出版机构世纪文景，全程北京世纪文景文化传播有限责任公司。文景致力于立足“社会新知，文艺新潮”，阅读未来</p>
          <div className={classes.moreBtn}><ExpandMore /></div>
          <div className={classes.itemBoxBtn}><Button><List/>&nbsp;共 370 部作品</Button></div>
        </div>
        {/* 评论 */}
        <div className={classes.itemBox}>
          <div className={classes.topTitle}>读者评论</div>
          <div className={classes.commentItem}>
            <div>
              <Grade className={classnames(classes.cmtStar, classes.cmtActive)}/>
              <Grade className={classes.cmtStar}/>              
              <Grade className={classes.cmtStar}/>              
              <Grade className={classes.cmtStar}/>              
              <Grade className={classes.cmtStar}/>              
            </div>
            <p className={classes.cmtCnt}>很温馨的一本书，书信和文字的魅力真的很大</p>
            <div className={classes.cmtBottom}>
              <div>森山大猫&nbsp;2018-06-12</div>
              <div className={classes.btmBtn}>
                <ThumbUp/>7&nbsp;&nbsp;<Sms/>0
              </div>
            </div>
          </div>
          <div className={classes.commentItem}>
            <div>
              <Grade className={classnames(classes.cmtStar, classes.cmtActive)}/>
              <Grade className={classes.cmtStar}/>              
              <Grade className={classes.cmtStar}/>              
              <Grade className={classes.cmtStar}/>              
              <Grade className={classes.cmtStar}/>              
            </div>
            <p className={classes.cmtCnt}>在蜗牛读的，一个小时来不及读完，但是绝对可以五星好评。偏爱书信传递时那从心里的期待，以及收到信时的雀跃，曾经我也寄过信啊。</p>
            <div className={classes.cmtBottom}>
              <div>森山大猫&nbsp;2018-06-12</div>
              <div className={classes.btmBtn}>
                <ThumbUp/>7&nbsp;&nbsp;<Sms/>0
              </div>
            </div>
          </div>
          <div className={classes.itemBoxBtn}><Button><Sort/>&nbsp;全部评论</Button></div>
        </div>
        {/* 标签 */}
        <div className={classes.itemBox}>
          <div className={classes.topTitle}>标签</div>
          <div className={classes.tag}>
            {
              bookData.tags.map((item, index) => {
                return (
                  <span
                    key={index}
                    onClick={this.entoBookListPage(item.name)}>
                      {item.name}
                  </span>
                )
              })
            }
          </div>
        </div>
        {/* more */}
        <div className={classes.itemBox}>
          <div className={classes.topTitle}>喜欢本作品的人也喜欢</div>
          <div className={classes.bookItemCnt}>
            {this.mayYouLikeComponent(mayYouLikeList, classes)}
          </div>
        </div>
        {/* 添加购物车 */}
        <div className={classes.carTab}>
          <div
            className={classnames(classes.cartIcon, classes.carLine)}
            onClick={this.giveAGift}>
            <CardGiftcard/>
          </div>
          <div
            className={classes.cartIcon}
            onClick={this.entoCartPage}>
            <ShoppingCart/>
          </div>
          <div
            className={classnames(classes.cartBtn, classes.colorBuy)}
            onClick={this.buyBook(bookData.id)}>加入购物车</div>
          <div className={classes.cartBtn} onClick={this.trialReading}>试读</div>
        </div>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          maxWidth="xs"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">提示</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.dialogContent}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleDialogClose}
              style={{color: '#6AACB8'}}
              autoFocus>确定
            </Button>
          </DialogActions>
        </Dialog>
        {loadingShow && <Loading/>}
      </div>
    )
  }
}

export default connect(state => ({
  bookIDs: state.bookIDs
}))(withStyles(styles)(BookDetail));
