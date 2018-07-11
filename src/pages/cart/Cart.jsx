import React, { Component } from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './CartCss';
import Loading from '@/components/loading/Loading';
import CartItem from './children/CartItem';
import NoShop from './children/NoShop';
import Utils from '@/utils/util';
import { connect } from 'react-redux'

class Cart extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingShow: false,
      carDataList: []
    }
  }
  
  componentDidMount () {
    let carDataList = [];
    let _this = this;
    if (this.props.bookIDs.length > 0) {
      this.setState({loadingShow: true});
      Promise.all(
        this.props.bookIDs.map((item) => {
          return new Promise((resolve, reject) => {
            _this.fetchData(item, (res) => {
              carDataList.push(res);
              resolve();
            })
          })
        })
      ).then(() => {
        this.setState({
          loadingShow: false,
          carDataList: carDataList
        });
      });
    }
  }

  fetchData (id, fn) {
    Utils.get(`/${id}`).then(res => {
      fn(res)
    })
  }

  render () {
    const { classes, bookIDs } = this.props;
    let { carDataList, loadingShow } = this.state;
    return (
      <div className={classes.pageContent}>
        <ToolBar history={this.props.history} showBack={true} text='购物车'/>
        {
          carDataList.length > 0 && (
            carDataList.map((item, index) => {
              if (index !== 0) {
                return (
                  <CartItem
                    classes={classes}
                    marginTop={classes.marginTop}
                    data={item}
                    key={index}
                  />
                )
              } else {
                return <CartItem classes={classes} data={item} key={index}/>
              }
            })
          )
        }
        {bookIDs.length <= 0 && <NoShop history={this.props.history} classes={classes}/>}
        {loadingShow && <Loading/>}
      </div>
    )
  }
}

export default connect(state => ({
  bookIDs: state.bookIDs
}))(withStyles(styles)(Cart));