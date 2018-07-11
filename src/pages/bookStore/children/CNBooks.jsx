import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { styles } from '../BookStoreCss';
import CategotyItem from '@/components/categoryItem/CategoryItem';
import Loading from '@/components/loading/Loading';
import Swiper from 'react-id-swiper';
import Utils from '@/utils/util';

class CNBooks extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingShow: true,
      bannerList: [],
      bestSell: [],
      goodsComment: [],
      newBook: [],
      specialOffer: [],
      suspense: [],
      childrenArr: [],
      lifeArr: []
    }
  }

  fetchData (params, fn) {
    Utils.get('/search', params).then(res => {
      fn(res);
    })
  }

  entoDetailPage (id) {
    return () => {
      this.props.history.push(`/bookDetail?id=${id}`);
    }
  }

  entoBookListPage (tag) {
    return () => {
      this.props.history.push(`/bookList?tag=${tag}`);
    }
  }

  componentDidMount () {
    let CNBookSessionStorage = Utils.getSessionStorage('CNBookData', true);
    if (CNBookSessionStorage) {
      this.setState({loadingShow: false});
      this.setState({...CNBookSessionStorage});
    } else {
      this.setState({loadingShow: true});
      Promise.all([
        new Promise((resolve, reject) => {
          this.fetchData({
            q: '推荐',
            count: 9,
          }, (res) => {
            this.setState({bannerList: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: '畅销',
            count: 1,
          }, (res) => {
            this.setState({bestSell: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: '好评',
            count: 1,
          }, (res) => {
            this.setState({goodsComment: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            tag: '新书',
            count: 1,
          }, (res) => {
            this.setState({newBook: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: '特价',
            count: 3,
          }, (res) => {
            this.setState({specialOffer: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: '推理',
            count: 3,
          }, (res) => {
            this.setState({suspense: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: '童心',
            count: 3,
          }, (res) => {
            this.setState({childrenArr: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: '人生',
            count: 3,
          }, (res) => {
            this.setState({lifeArr: res.books});
            resolve();
          });
        }),
      ]).then(val => {
        this.setState({loadingShow: false});
        Utils.setSessionStorage('CNBookData', {
          bannerList: this.state.bannerList,
          bestSell: this.state.bestSell,
          goodsComment: this.state.goodsComment,
          newBook: this.state.newBook,
          specialOffer: this.state.specialOffer,
          suspense: this.state.suspense,
          childrenArr: this.state.childrenArr,
          lifeArr: this.state.lifeArr
        })
      })
    }
  }

  render () {
    const { classes } = this.props;
    const swiperParams = {
      loop: true,
      pagination: {
        el: `.swiper-pagination.${classes.paginationColor}`,
        clickable: true,
      }
    }
    const swiperBookParams = {
      loop: true,
      pagination: {
        el: `.swiper-pagination.${classes.paginationBookColor}`,
        clickable: true,
      }
    }
    let {
      loadingShow,
      bannerList,
      bestSell,
      goodsComment,
      newBook,
      specialOffer,
      suspense,
      childrenArr,
      lifeArr
    } = this.state;
    let bannerListData = [];
    let bannerPageData = [];
    if (bannerList.length > 0) {
      bannerList.map((item, index) => {
        if (index % 3 === 0) {
          bannerListData = [];
          bannerList.slice(index, index + 3).map((item, index) => {
            return bannerListData.push(
              <div
                className={classes.hootItem}
                key={index}
                onClick={this.entoDetailPage(item.id)}>
                <div className={classes.itemImg}><img src={item.images.small} alt={item.title}/></div>
                <div className={classes.itemBookTitle}>{item.title}</div>
                <div className={classes.author}>
                  {
                    item.author.map((item, index) => {
                      return item + ' '
                    })
                  }
                </div>
              </div>
            )
          });
          bannerPageData.push(bannerListData);
        }
        return bannerPageData;
      })
    }
    
    return (
      <div className={classes.CNBook}>
        {/* swiper */}
        <Swiper {...swiperParams}>
          <div className={classes.bannerImg}><img src={require('@/assets/banner1.jpg')} alt=""/></div>
          <div className={classes.bannerImg}><img src={require('@/assets/banner2.jpg')} alt=""/></div>
          <div className={classes.bannerImg}><img src={require('@/assets/banner3.jpg')} alt=""/></div>
        </Swiper>
        {
          bannerPageData.length > 0 ? (
            <Swiper {...swiperBookParams}>
              {
                bannerPageData.map((item, index) => {
                  return (
                    <div className={classnames(classes.CNHoot, classes.bannerBook)} key={index}>
                      {item}
                    </div>
                  )
                })
              }
            </Swiper>
          ) : (
            <div className={classnames(classes.CNHoot, classes.bannerBook)}></div>
          )
        }
        <div className={classes.CNHoot}>
          {/* 畅销 */}
          {
            bestSell.length > 0 ? (
              <div className={classnames(classes.hootItem, classes.bestSelling)}>
                <div className={classnames(classes.itemTitle, classes.colorSelling)}>本月畅销</div>
                <div
                  className={classnames(classes.itemImg)}
                  onClick={this.entoDetailPage(bestSell[0].id)}>
                    <img src={bestSell[0].images.small} alt={bestSell[0].title}/>
                </div>
                <p className={classes.itemBookTitle}>{bestSell[0].title}</p>
                <p className={classes.author}>
                  {bestSell[0].author.map((item, index) => {
                    return item + ' '
                  })}
                </p>
                <div className={classnames(classes.itemBtn)}>
                  <Button
                    className={classes.colorSelling}
                    onClick={this.entoBookListPage('畅销')}
                  >TOP 30</Button>
                </div>
              </div>
            ) : (
              <div className={classnames(classes.hootItem, classes.bestSelling)}></div>
            )
          }
          {/* 好评 */}
          {
            goodsComment.length > 0 ? (
              <div className={classnames(classes.hootItem, classes.praise)}>
                <div className={classnames(classes.itemTitle, classes.colorPraise)}>本月好评</div>
                <div
                  className={classnames(classes.itemImg)}
                  onClick={this.entoDetailPage(goodsComment[0].id)}>
                    <img src={goodsComment[0].images.small} alt={goodsComment[0].title}/>
                </div>
                <p className={classes.itemBookTitle}>{goodsComment[0].title}</p>
                <p className={classes.author}>
                  {goodsComment[0].author.map((item, index) => {
                    return item + ' '
                  })}
                </p>
                <div className={classnames(classes.itemBtn)}>
                  <Button
                    className={classes.colorPraise}
                    onClick={this.entoBookListPage('好评')}
                  >TOP 30</Button>
                </div>
              </div>
            ) : (
              <div className={classnames(classes.hootItem, classes.praise)}></div>
            )
          }
          {/* 新书 */}
          {
            newBook.length > 0 ? (
              <div className={classnames(classes.hootItem, classes.newBooks)}>
                <div className={classnames(classes.itemTitle, classes.colorNewBook)}>本月新书</div>
                <div
                  className={classnames(classes.itemImg)}
                  onClick={this.entoDetailPage(newBook[0].id)}>
                    <img src={newBook[0].images.small} alt={newBook[0].title}/>
                </div>
                <p className={classes.itemBookTitle}>{newBook[0].title}</p>
                <p className={classes.author}>
                  {newBook[0].author.map((item, index) => {
                    return item + ' '
                  })}
                </p>
                <div className={classnames(classes.itemBtn)}>
                  <Button
                    className={classes.colorNewBook}
                    onClick={this.entoBookListPage('新书')}
                  >TOP 30</Button>
                </div>
              </div>
            ) : (
              <div className={classnames(classes.hootItem, classes.newBooks)}></div>
            )
          }
        </div>
        <CategotyItem
          data={specialOffer}
          history={this.props.history}
          title='今日特价'
          showPrice={true}
          btnText='查看更多'
          q="特价"
        />
        <div className={classes.CNTable}>
          <div
            className={classnames(classes.tableItem, classes.bRight)}
            onClick={this.entoBookListPage('小说')}>小说
          </div>
          <div
            className={classnames(classes.tableItem, classes.bRight)}
            onClick={this.entoBookListPage('文学')}>文学
          </div>
          <div
            className={classes.tableItem}
            onClick={this.entoBookListPage('人文社会')}>人文社会
          </div>
          <div
            className={classnames(classes.tableItem, classes.bRight)}
            onClick={this.entoBookListPage('经济管理')}>经济管理
          </div>
          <div
            className={classnames(classes.tableItem, classes.bRight)}
            onClick={this.entoBookListPage('科技科普')}>科技科普
          </div>
          <div
            className={classes.tableItem}
            onClick={this.entoBookListPage('计算机与互联网')}>计算机与互联网
          </div>
          <div
            className={classnames(classes.tableItem, classes.bRight, classes.bBottom)}
            onClick={this.entoBookListPage('励志')}>成功励志
          </div>
          <div
            className={classnames(classes.tableItem, classes.bRight, classes.bBottom)}
            onClick={this.entoBookListPage('生活')}>生活
          </div>
          <div
            className={classnames(classes.tableItem, classes.bBottom)}
            onClick={this.entoBookListPage('少儿')}>少儿
          </div>
        </div>
        <CategotyItem
          data={suspense}
          history={this.props.history}
          icon={true}
          title='推理'
          showAuthor={true}
          btnText='查看更多'
          tag='推理'
        />
        <CategotyItem
          data={childrenArr}
          history={this.props.history}
          icon={true}
          title='童心不减'
          showAuthor={true}
          btnText='查看更多'
          tag='童心'
        />
        <CategotyItem
          data={lifeArr}
          history={this.props.history}
          icon={true}
          title='人生不设限'
          showAuthor={true}
          btnText='查看更多'
          tag='人生'
        />
        {loadingShow && <Loading/>}
      </div>
    )
  }
}

export default withStyles(styles)(CNBooks);
