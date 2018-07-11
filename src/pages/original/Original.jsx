import React, { Component } from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import NavigationBar from "@/components/navigationbar/NavigationBar";
import classnames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import { styles } from './OriginalCss';

class Original extends Component {

  entoOriginalBookPage (tag) {
    return () => {
      this.props.history.push(`/originalBook?tag=${tag}`);
    }
  }
  entoJoinTheCreationPage = () => {
    this.props.history.push('/joinTheCreation');
  }


  authorWirtingComponent = (classes) => {
    return (
      <div
        className={classnames(classes.originalItem, classes.authorWirting)}
        onClick={this.entoJoinTheCreationPage}
      >
        <div className={classes.awLeft}>
          <div className={classes.awLeftCounts}>
            <span className={classes.awLeftCount}>4</span>
            <span className={classes.awLeftCount}>6</span>
            <span className={classes.awLeftCount}>4</span>
            <span className={classes.awLeftCount}>4</span>
            <span className={classes.awLeftCount}>8</span>
          </div>
          <Typography className={classes.awText}>位作者正在豆瓣阅读写作</Typography>
        </div>
        <div className={classes.itemRight}>
          <span className={classes.awRightTxt}>我要加入</span><NavigateNext className={classes.awRightTxt} />
        </div>
      </div>
    )
  }

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.pageContent}>
        <ToolBar
          history={this.props.history}
          showCategory={true}
          showSearch={true}
          text='豆瓣阅读'
        />
        {this.authorWirtingComponent(classes)}
        <div
          className={classnames(classes.originalItem, classes.categoryItem, classes.marTop8)}
          onClick={this.entoOriginalBookPage('新女性')}>
          <div>
            <div className={classes.ctgLeftTitle}>新女性故事</div>
            <div className={classes.ctgLeftCount}>3685</div>
          </div>
          <div className={classes.itemRight}>
            <span className={classes.rightTxtColor}>一个女人的自传</span><NavigateNext className={classes.rightTxtColor} />
          </div>
        </div>
        <div
          className={classnames(classes.originalItem, classes.categoryItem)}
          onClick={this.entoOriginalBookPage('科幻')}>
          <div>
            <div className={classes.ctgLeftTitle}>科幻幻想</div>
            <div className={classes.ctgLeftCount}>3685</div>
          </div>
          <div className={classes.itemRight}>
            <span className={classes.rightTxtColor}>三体</span><NavigateNext className={classes.rightTxtColor} />
          </div>
        </div>
        <div
          className={classnames(classes.originalItem, classes.categoryItem)}
          onClick={this.entoOriginalBookPage('悬疑推理')}>
          <div>
            <div className={classes.ctgLeftTitle}>悬疑推理</div>
            <div className={classes.ctgLeftCount}>3685</div>
          </div>
          <div className={classes.itemRight}>
            <span className={classes.rightTxtColor}>白夜行</span><NavigateNext className={classes.rightTxtColor} />
          </div>
        </div>
        <div
          className={classnames(classes.originalItem, classes.categoryItem)}
          onClick={this.entoOriginalBookPage('青春小说')}>
          <div>
            <div className={classes.ctgLeftTitle}>青春小说</div>
            <div className={classes.ctgLeftCount}>3685</div>
          </div>
          <div className={classes.itemRight}>
            <span className={classes.rightTxtColor}>匆匆那年（上下）</span><NavigateNext className={classes.rightTxtColor} />
          </div>
        </div>
        <div
          className={classnames(classes.originalItem, classes.categoryItem)}
          onClick={this.entoOriginalBookPage('都市小说')}>
          <div>
            <div className={classes.ctgLeftTitle}>都市小说</div>
            <div className={classes.ctgLeftCount}>3685</div>
          </div>
          <div className={classes.itemRight}>
            <span className={classes.rightTxtColor}>依然是你</span><NavigateNext className={classes.rightTxtColor} />
          </div>
        </div>
        <div
          className={classnames(classes.originalItem, classes.categoryItem)}
          onClick={this.entoOriginalBookPage('非虚构')}>
          <div>
            <div className={classes.ctgLeftTitle}>非虚构</div>
            <div className={classes.ctgLeftCount}>3685</div>
          </div>
          <div className={classes.itemRight}>
            <span className={classes.rightTxtColor}>被仰望与被遗忘的</span><NavigateNext className={classes.rightTxtColor} />
          </div>
        </div>
        <NavigationBar history={this.props.history} />
      </div>
    )
  }
}

export default withStyles(styles)(Original);