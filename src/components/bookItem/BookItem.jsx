import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CardMedia, Typography, Button } from '@material-ui/core';
import { Grade } from '@material-ui/icons';
import { styles } from './BookItemCss';
import CssUtils from '@/utils/CssUtils';
import { Link } from 'react-router-dom';

class BookItem extends Component {

  setStarRate (classes, average) {
    let starItemArr = [];
    let starCount = Math.floor(5 * average / 10);
    for (let i = 0; i < starCount; i++) {
      starItemArr.push(<Grade className={classnames(classes.starRateStar, classes.active)} key={i} />)
    }
    for (let j = 0; j < 5 - starCount; j++) {
      starItemArr.push(<Grade className={classes.starRateStar} key={4 - j} />)
    }
    return starItemArr;
  }

  // 全站阅读
  allRead (id) {
    return () => {
      this.props.history.push(`/bookDetail?id=${id}`)
    }
  }

  render () {
    const {
      classes,
      marginTop,
      data
    } = this.props;
    return (
      <div className={classnames(classes.homeItem, {[classes.itemMarginTop]: marginTop})}>
        <Link to={{
          pathname: '/bookDetail',
          search: `?id=${data.id}`
        }}>
          <div className={classes.itemCnt}>
            <div className={classes.itemLeft}>
              <Typography className={classes.itemLeftTitle}>{data.title}</Typography>
              <Typography className={classes.itemLeftSubTitle}>{data.author[0]} · {data.tags[0].name}</Typography>
              <Typography className={classes.itemLeftP}>{data.summary}</Typography>
            </div>
            <CardMedia
              className={classes.itemRight}
              image={data.image}
              title={data.title}
            />
          </div>
          <div className={classes.itemRate}>
            <div className={classes.starRate}>
              {this.setStarRate(classes, data.rating.average)}
            </div>
            {
              data.rating.numRaters > 10 ? (
                <span className={classes.rateSpan}>
                  <span className={classnames(classes.rateSpan, classes.rateSpanCount)}>
                    {data.rating.average}
                  </span>&nbsp;{data.rating.numRaters}&nbsp;评价
                </span>
              ) : (
                <span className={classes.rateSpan}>少于 10 人评价</span>
              )
            }
          </div>
          <Typography style={{color: CssUtils.colorTxt}}>共{data.pages}页</Typography>
        </Link>
        <div className={classes.itemBtnCnt}>
          <Button className={classes.itemBtn} onClick={this.allRead(data.id)}>全站热读</Button>
        </div>
        {/* <div className={classes.homeItem}>
          <div className={classes.itemCnt}>
            <div className={classes.itemLeft}>
              <Typography className={classes.itemLeftTitle}>冷雨</Typography>
              <Typography className={classes.itemLeftSubTitle}>郭沛文·推理小说</Typography>
              <Typography className={classes.itemLeftP}>何天奈是南方小城津水一位出色的刑警。十七年前，女儿何娇在学校春游时，从塔上坠亡。在场的有女儿的老师和同班同学共计63人，却无一人能提供和凶手有关的线索。知晓真.</Typography>
            </div>
            <CardMedia
              className={classes.itemRight}
              image="https://img3.doubanio.com/view/ark_article_cover/retina/public/26395006.jpg?v=1484298363.0"
              title="冷雨"
            />
          </div>
          <div className={classes.itemRate}>
            <div className={classes.starRate}>
              <Grade className={classnames(classes.starRateStar, classes.active)} />
              <Grade className={classes.starRateStar} />
              <Grade className={classes.starRateStar} />
              <Grade className={classes.starRateStar} />
              <Grade className={classes.starRateStar} />
            </div>
            <span className={classnames(classes.rateSpan, classes.rateSpanCount)}>8.4</span>
            <span className={classes.rateSpan}>1153&nbsp;评价</span>
          </div>
          <Typography style={{color: CssUtils.colorTxt}}>约97,000字</Typography>
          <div className={classes.itemBtnCnt}>
            <Button className={classes.itemBtn}>全站热读</Button>
          </div>
        </div> */}
      </div>
    )
  }
}

export default withStyles(styles)(BookItem);