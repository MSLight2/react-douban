import React, { Component } from 'react';
import ToolBar from "@/components/toolBar/ToolBar";
import NavigationBar from "@/components/navigationbar/NavigationBar";
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import { styles } from './BookStoreCss';
import CNBooks from './children/CNBooks';
import ENBooks from './children/ENBooks';
import Utils from '@/utils/util';

class BookStore extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    Utils.setSessionStorage('bookStoreSelectTab', value)
    this.setState({ value });
  }

  componentDidMount () {
    this.pageElem.scrollIntoView(true);
    let tabValue = parseInt(Utils.getSessionStorage('bookStoreSelectTab'));
    if (tabValue) {
      this.setState({ value: tabValue });
    }
  }

  render () {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.pageContent} ref={elem => this.pageElem = elem}>
        <ToolBar
          history={this.props.history}
          showCategory={true}
          showSearch={true}
          text='豆瓣阅读'
        />
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{root: classes.tabsRoot, indicator: classes.tabsIndicator}}>
          <Tab
            disableRipple
            classes={{root: classes.tabRoot, selected: classes.tabSelect}}
            label="中文电子书">
          </Tab>
          <Tab
            disableRipple
            classes={{root: classes.tabRoot, selected: classes.tabSelect}}
            label="英文电子书">
          </Tab>
        </Tabs>
        {value === 0 && <CNBooks history={this.props.history} />}
        {value === 1 && <ENBooks history={this.props.history} />}
        <NavigationBar history={this.props.history} />
      </div>
    )
  }
}

export default withStyles(styles)(BookStore);