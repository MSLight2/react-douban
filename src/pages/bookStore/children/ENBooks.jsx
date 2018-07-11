import React, { Component } from 'react';
import Loading from '@/components/loading/Loading';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../BookStoreCss';
import CategotyItem from '@/components/categoryItem/CategoryItem';
import Utils from '@/utils/util';

class ENBooks extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingShow: false,
      dreamList: [],
      biographyList: [],
      artistList: [],
      storyList: [],
      womenStoryList: [],
      westFoodList: []
    }
  }

  fetchData (params, fn) {
    Utils.get('/search', params).then(res => {
      fn(res);
    })
  }

  componentDidMount () {
    let ENBookSessionStorage = Utils.getSessionStorage('ENBookData', true);
    if (ENBookSessionStorage) {
      this.setState({loadingShow: false});
      this.setState({...ENBookSessionStorage});
    } else {
      this.setState({loadingShow: true});
      Promise.all([
        new Promise((resolve, reject) => {
          this.fetchData({
            q: 'Hollywood fairy tales',
            count: 3,
          }, (res) => {
            this.setState({dreamList: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: 'biography',
            count: 3,
          }, (res) => {
            this.setState({biographyList: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: 'artist',
            count: 3,
          }, (res) => {
            this.setState({artistList: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: 'story',
            count: 3,
          }, (res) => {
            this.setState({storyList: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: 'The story of a woman',
            count: 3,
          }, (res) => {
            this.setState({womenStoryList: res.books});
            resolve();
          });
        }),
        new Promise((resolve, reject) => {
          this.fetchData({
            q: 'Western food recipe',
            count: 3,
          }, (res) => {
            this.setState({westFoodList: res.books});
            resolve();
          });
        }),
      ]).then(val => {
        this.setState({loadingShow: false});
        Utils.setSessionStorage('ENBookData', {
          dreamList: this.state.dreamList,
          biographyList: this.state.biographyList,
          artistList: this.state.artistList,
          storyList: this.state.storyList,
          womenStoryList: this.state.womenStoryList,
          westFoodList:this.state.westFoodList
        })
      })
    }
  }

  render () {
    const { classes } = this.props;
    let {
      loadingShow,
      dreamList,
      biographyList,
      artistList,
      storyList,
      womenStoryList,
      westFoodList
    } = this.state;
    return (
      <div>
        <div className={classes.ENBannerImg}><img src={require('@/assets/en_banner.png')} alt=""/></div>
        <CategotyItem
          data={dreamList}
          history={this.props.history}
          icon={true}
          title='印在心头的美梦'
          subTitle='风雨两百年——从建国往事到好莱坞童话'
          showAuthor={true}
          btnText='查看更多'
          tag='Hollywood fairy tales'
        />
        <CategotyItem
          data={biographyList}
          history={this.props.history}
          icon={true}
          title='毕业生必读的英文书'
          subTitle='那些过来人告诉我的事'
          showAuthor={true}
          btnText='查看更多'
          tag='biography'
        />
        <CategotyItem
          data={artistList}
          history={this.props.history}
          icon={true}
          title='艺术家传记特辑'
          subTitle='他们走了世间永失纯真'
          showAuthor={true}
          btnText='查看更多'
          tag='artist'
        />
        <CategotyItem
          data={storyList}
          history={this.props.history}
          icon={true}
          title='跟着奥卡读故事'
          showAuthor={true}
          btnText='查看更多'
          tag='story'
        />
        <CategotyItem
          data={womenStoryList}
          history={this.props.history}
          icon={true}
          title='女孩，女人，他们最勇敢的故事'
          showAuthor={true}
          btnText='查看更多'
          tag='The story of a woman'
        />
        <CategotyItem
          data={westFoodList}
          history={this.props.history}
          icon={true}
          title='西餐食谱特辑'
          showAuthor={true}
          btnText='查看更多'
          tag='Western food recipe'
        />
        {loadingShow && <Loading/>}
      </div>
    )
  }
}

export default withStyles(styles)(ENBooks);
