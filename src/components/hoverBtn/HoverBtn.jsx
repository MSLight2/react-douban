import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './HoverBtnCss';

class HoverBtn extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div
        className={classes.hoverBtn}
        onClick={this.props.handleClick}>
        <Button mini variant="fab" className={classes.auIcon}>
          <ArrowUpward/>
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(HoverBtn);