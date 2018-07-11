import React, { Component } from 'react';
import classnames from 'classnames';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { styles } from './LoadingUpdateCss';

class LoadingUpdate extends Component {
  render () {
    const {
        classes,
        type
      } = this.props;
    return (
      <div
        style={this.props.style} 
        className={classnames({
          [classes.pullUpLoading]: type === 'up',
          [classes.pullDownLoading]: type === 'down'
        })}
      >
        <CircularProgress
          style={{color: green[500]}}
          size={type === 'up' ? 30 : 25} />
      </div>
    )
  }
}

export default withStyles(styles)(LoadingUpdate);