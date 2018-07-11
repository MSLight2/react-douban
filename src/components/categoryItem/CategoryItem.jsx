import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormatColorFill } from '@material-ui/icons';
import { styles } from './CategoryItemCss';

class Category extends Component {

  entoDetailPage (id) {
    return () => {
      this.props.history.push(`/bookDetail?id=${id}`);
    }
  }

  entoBookListPage (tag) {
    return () => {
      if (this.props.q) {
        this.props.history.push(`/bookList?q=${tag}`);
      } else {
        this.props.history.push(`/bookList?tag=${tag}`);
      }
    }
  }

  render () {
    const {
      classes,
      icon,
      title,
      subTitle,
      showAuthor,
      showPrice,
      btnText,
      // q: 豆瓣api关键字；tag: 豆瓣api标签
      q,
      tag,
      data
    } = this.props;
    let dataList = [];
    if (data && data.length > 0) {
      data.map((item, index) => {
        return dataList.push(
          <div
            className={classes.ctgContainItem}
            key={index}
            onClick={this.entoDetailPage(item.id)}>
            <div className={classes.ctgItemImg}><img src={item.images.small} alt={item.title}/></div>
            <p className={classes.ctgItemBookTitle}>{item.title}</p>
            {showAuthor && (
              <p className={classes.ctgAuthor}>
                {item.author.map((item, index) => {
                  return item + ' '
                })}
              </p>
            )}
            {showPrice && (
              <p className={classes.ctgPrice}>
                <span className={classes.dollar}>￥
                  <span className={classes.discountPrice}>
                    {(Number(item.price.replace(/[^0-9.]*/ig, '')) / 0.9).toFixed(2)}
                  </span>
                  <span>{(Number(item.price.replace(/[^0-9.]*/ig, ''))).toFixed(2)}</span>
                </span>
              </p>
            )}
          </div>
        );
      });
    }

    return (
      <div>
        <div className={classes.categotyItem}>
          <div className={classes.ctgTop}>
            {icon && <FormatColorFill className={classes.ctgIcon} />}{title}
          </div>
          {subTitle && <div className={classes.ctgTopTitle}>{subTitle}</div>}
          <div className={classes.ctgContain}>
            {dataList}
          </div>
          {
            dataList.length > 0 && (
              <div className={classes.ctgBtn}>
                <Button onClick={this.entoBookListPage(q ? q : tag)}>{btnText}</Button>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Category);