import React, { Component } from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import NavigationBar from "@/components/navigationbar/NavigationBar";
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  AccountCircle,
  Edit,
  Notifications,
  History,
  AssignmentTurnedIn,
  Favorite,
  AccountBalanceWallet,
  LocalActivity,
  Redeem,
  QuestionAnswer,
  Settings
} from '@material-ui/icons';
import { styles } from './MyCss';
import { connect } from 'react-redux'

class My extends Component {
  render () {
    const { classes, bookIDs } = this.props;
    return (
      <div className={classes.pageContent}>
        <ToolBar
          history={this.props.history}
          showCart={true}
          badge={bookIDs.length}
          text='豆瓣阅读'
        />
        <div className={classes.headItem}>
          <AccountCircle className={classes.headItemImg} />
          <span className={classes.headItemNickName}>烟笼寒水月笼沙</span>
          <Edit className={classes.headItemEdit} />
        </div>
        <div className={classnames(classes.myItem, classes.marTop8)}>
          <div className={classes.myItemLeft}>
            <Notifications className={classes.iconColor} />
            <span className={classes.myItemTxt}>提醒</span>
          </div>
        </div>
        <div className={classnames(classes.myItem, classes.marTop8)}>
          <div className={classes.myItemLeft}>
            <History className={classes.iconColor} />
            <span className={classes.myItemTxt}>我的订阅专栏连载</span>
          </div>
          <div>
            <span className={classes.myItemRightTxt}>0&nbsp;&nbsp;部</span>
          </div>
        </div>
        <div className={classes.myItem}>
          <div className={classes.myItemLeft}>
            <AssignmentTurnedIn className={classes.iconColor} />
            <span className={classes.myItemTxt}>我购买的电子书</span>
          </div>
          <div>
            <span className={classes.myItemRightTxt}>2&nbsp;&nbsp;部</span>
          </div>
        </div>
        <div className={classes.myItem}>
          <div className={classes.myItemLeft}>
            <Favorite className={classes.iconColor} />
            <span className={classes.myItemTxt}>我喜欢的短篇</span>
          </div>
          <div>
            <span className={classes.myItemRightTxt}>0&nbsp;&nbsp;篇</span>
          </div>
        </div>
        <div className={classnames(classes.myItem, classes.marTop8)}>
          <div className={classes.myItemLeft}>
            <AccountBalanceWallet className={classes.iconColor} />
            <span className={classes.myItemTxt}>我的余额</span>
          </div>
          <div>
            <span className={classes.myItemRightTxt}>￥0.00</span>
          </div>
        </div>
        <div className={classes.myItem}>
          <div className={classes.myItemLeft}>
            <LocalActivity className={classes.iconColor} />
            <span className={classes.myItemTxt}>我的礼券</span>
          </div>
          <div>
            <span className={classes.myItemRightTxt}>0</span>
          </div>
        </div>
        <div className={classes.myItem}>
          <div className={classes.myItemLeft}>
            <Redeem className={classes.iconColor} />
            <span className={classes.myItemTxt}>我的礼物</span>
          </div>
        </div>
        <div className={classnames(classes.myItem, classes.marTop8)}>
          <div className={classes.myItemLeft}>
            <QuestionAnswer className={classes.iconColor} />
            <span className={classes.myItemTxt}>反馈中心</span>
          </div>
        </div>
        <div className={classes.myItem}>
          <div className={classes.myItemLeft}>
            <Settings className={classes.iconColor} />
            <span className={classes.myItemTxt}>设置</span>
          </div>
        </div>
        <NavigationBar history={this.props.history} />
      </div>
    )
  }
}

export default connect(state => ({
  bookIDs: state.bookIDs
}))(withStyles(styles)(My));