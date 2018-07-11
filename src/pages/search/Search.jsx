import React, { Component } from 'react';
import Loading from '@/components/loading/Loading';
import ToolBar from "@/components/toolBar/ToolBar";
import HootBook from '@/components/hootBook/HootBook';
import { withStyles } from '@material-ui/core/styles';
import Utils from '@/utils/util';
import { styles } from './SearchCss';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingShow: true,
      hootList: []
    }
  }

  componentDidMount () {
    this.fetchHootData({
      tag: '高分',
      count: '7'
    })
  }

  fetchHootData (params) {
    Utils.get('/search', params).then(res => {
      this.setState({hootList: res.books, loadingShow: false});
    })
  }

  render () {
    const { classes } = this.props;
    let {
      loadingShow,
      hootList
    } = this.state;
    return (
      <div className={classes.pageContent}>
        <ToolBar history={this.props.history} showBack={true} showInput={true} text='搜索'/>
        <HootBook history={this.props.history} data={hootList} />
        {loadingShow && <Loading/>}
      </div>
    )
  }
}

export default withStyles(styles)(Search);