import React, { Component } from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ClassificationCss';

class Classification extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataList: [
        {
          title: '文学',
          list: ['小说','随笔','日本文学','散文','诗歌','童话','名著']
        },
        {
          title: '流行',
          list: ['漫画','推理','绘本','青春','科幻','言情','奇幻','武侠']
        },
        {
          title: '文化',
          list: ['历史','哲学','传记','设计','建筑','电影','回忆录','音乐']
        },
        {
          title: '生活',
          list: ['旅行','励志','职场','教育','美食','健康','家居']
        },
        {
          title: '经管',
          list: ['经济学','管理','商业','金融','营销','理财','股票','企业史']
        },
        {
          title: '科技',
          list: ['科普','互联网','编程','交互设计','算法','通信','神经网络']
        }
      ]
    }
  }

  entoBookList (tag) {
    return () => {
      this.props.history.push(`/bookList?tag=${tag}`);
    }
  }

  setData (dataList, classes) {
    let listComponent = [];
    if (dataList.length > 0) {
      dataList.map((item, index) => {
        return listComponent.push(
          <div className={classes.classifyItem} key={index}>
            <div className={classes.topTitle}>{item.title}</div>
            <div className={classes.subCnt}>
              {
                item.list.map((val, i) => {
                  return <div onClick={this.entoBookList(val)} key={i}>{val}</div>
                })
              }
            </div>
          </div>
        );
      });
    }
    return listComponent;
  }

  render () {
    const { classes } = this.props;
    let { dataList } = this.state;
    return (
      <div className={classes.pageContent}>
        <ToolBar history={this.props.history} showBack={true} text='书籍分类'/>
        <div>
          {this.setData(dataList, classes)}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Classification);