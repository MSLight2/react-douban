import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './HootBookCss';

class HootBook extends Component {
  entoBookDetail (id) {
    return () => {
      this.props.history.push(`/bookDetail?id=${id}`);
    }
  }

  render () {
    const { classes, data } = this.props;
    let dataList = [];
    if (data.length > 0) {
      data.map((item, index) => {
        return dataList.push(
          <div
            className={classes.hootItem}
            key={index}
            onClick={this.entoBookDetail(item.id)}>
              <div className={classnames(
                classes.hootBg,
                {
                  [classes.colorFirst]: index === 0,
                  [classes.colorSconed]: index === 1 || index === 2,
                }
              )}>{index + 1}</div>
              <div className={classes.hootImg}><img src={item.images.small} alt={item.title}/></div>
              <div className={classes.hootDesc}>
                <div className={classes.hootDescTitle}>{item.title}</div>
                <div className={classes.hootAuthor}>
                  {
                    item.author.map((item, index) => {
                      return item + ' '
                    })
                  }
                </div>
              </div>
          </div>
        );
      });
    }
    return (
      <div className={classes.hootBook}>
        {
          dataList.length > 0 && <div className={classes.hootTitle}><span>榜单</span>热门榜</div>
        }
        {dataList}
      </div>
    )
  }
}

export default withStyles(styles)(HootBook);