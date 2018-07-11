import React, { Component } from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './JoinTheCreationCss';

class JoinTheCreation extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.pageContent}>
        <ToolBar history={this.props.history} showBack={true} showShare={true} text='在豆瓣阅读发表作品'/>
        <div className={classes.dev}>
          <img src={require('../../assets/development.svg')} alt=""/>
          <div>开发中...</div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(JoinTheCreation);