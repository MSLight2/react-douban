import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { TurnedIn, Create, LocalLibrary, Person } from '@material-ui/icons';
import { styles } from './NavigationBarCss';

class NavigationBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  componentDidMount () {
    let pathName =  this.props.history.location.pathname;
    if (pathName === '/') {
      this.setState({ value: 0 });
    } else if (pathName === '/original') {
      this.setState({ value: 1 });
    } else if (pathName === '/bookStore') {
      this.setState({ value: 2 });
    } else if (pathName === '/my') {
      this.setState({ value: 3 });
    } else {
      this.setState({ value: 0 });
    }
  }

  handleNavigationChange = (event, value) => {
    setTimeout(() => {
      switch (value) {
        case 0:
          this.props.history.replace('/');
        break;
        case 1:
          this.props.history.replace('/original');
        break;
        case 2:
          this.props.history.replace('/bookStore');
          break;
        case 3:
          this.props.history.replace('/my');
          break;
        default:
          break;
      }
    }, 0)
  };

  render () {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleNavigationChange}
        showLabels
        classes={{root: classes.naviPosition}}
      >
        <BottomNavigationAction
          classes={{root: classes.naviDefault, selected: classes.naviSelect}}
          label="推荐"
          icon={<TurnedIn />}
        />
        <BottomNavigationAction
          classes={{root: classes.naviDefault, selected: classes.naviSelect}}
          label="原创"
          icon={<Create />}
        />
        <BottomNavigationAction
          classes={{root: classes.naviDefault, selected: classes.naviSelect}}
          label="书店"
          icon={<LocalLibrary />}
        />
        <BottomNavigationAction
          classes={{root: classes.naviDefault, selected: classes.naviSelect}}
          label="我的"
          icon={<Person />}
        />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(NavigationBar);