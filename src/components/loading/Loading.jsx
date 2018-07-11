import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { CircularProgress } from '@material-ui/core';
import { styles } from './LoadingCss';

class Loading extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.loadingMain}>
        <CircularProgress style={{color: green[500]}}/>
      </div>
    )
  }
}

export default withStyles(styles)(Loading);