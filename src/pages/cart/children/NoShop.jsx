import React, { Component } from 'react';
import { Button } from '@material-ui/core';

export default class NoShop extends Component {

  entoHome = () => {
    this.props.history.replace('/');
  }

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.noShop}>
        <div className={classes.noShopImg}>
          <img src={require('../../../assets/not_shop.svg')} alt=""/>
        </div>
        <div className={classes.noTitle}>购物车空空如也o(╥﹏╥)o</div>
        <div className={classes.goBtn}>
          <Button onClick={this.entoHome}>去逛逛^_^~~</Button>
        </div>
      </div>
    )
  }
}
