import React, { Component } from 'react';
import { Radio, Typography } from '@material-ui/core';
import classnames from 'classnames';

export default class CartItem extends Component {
  render () {
    const { classes, marginTop, data } = this.props;
    return (
      <div className={classnames(classes.cartItem, marginTop)}>
        <div className={classes.checkRadio}>
          <Radio
            classes={{
              root: classes.radioRoot,
              checked: classes.radioCheck
            }}
            checked={true}
            value='0'
          />
        </div>
        <div className={classes.cartImg}><img src={data.images.small} alt={data.title}/></div>
        <div className={classes.cartBookDesc}>
          <Typography className={classes.cbTitle}>{data.title}</Typography>
          <Typography className={classes.cbAuthor}>
            {data.author.map((item, index) => {
              return item + ' '
            })}
          </Typography>
          <div className={classes.cbPrice}>￥
            <span>{(Number(data.price.replace(/[^0-9.]*/ig, '')) / 0.9).toFixed(2)}</span>
            <span className={classes.cbDisPrice}>&nbsp;{(Number(data.price.replace(/[^0-9.]*/ig, ''))).toFixed(2)}</span>
          </div>
        </div>
      </div>
    )
  }
}