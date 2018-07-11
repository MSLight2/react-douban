import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Badge, TextField } from '@material-ui/core';
import {
  Menu,
  ViewModule,
  Search,
  ShoppingCart,
  ArrowBack,
  Share
} from '@material-ui/icons';
import { styles } from './ToolBarCss';

class ToolBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  goBack = () => {
    if (this.props.history) {
      this.props.history.goBack();
    }
  }

  entoCartPage = () => {
    if (this.props.history) {
      this.props.history.push('/cart');
    }
  }

  entoSearchPage = () => {
    if (this.props.history) {
      this.props.history.push('/search');
    }
  }

  entoClassifyPage = () => {
    if (this.props.history) {
      this.props.history.push('/classification');
    }
  }

  // 回车搜索
  handleKeyDown = (e) => {
    let code = e.keyCode || e.charCode || e.which
    if (code === 13) {
      this.props.history.replace(`/bookList?q=${this.state.inputValue}`);
    }
  }

  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  render () {
    const {
      classes,
      text,
      showSlide,
      showCategory,
      showSearch,
      showCart,
      showBack,
      showShare,
      showInput,
      badge
    } = this.props;
    return (
      <div className="">
        <AppBar position="fixed" classes={{root: classes.barColor}}>
          <Toolbar>
            {showSlide && <IconButton><Menu/></IconButton>}
            {showBack && <IconButton onClick={this.goBack}><ArrowBack/></IconButton>}
            <Typography className={showInput ? '' : classes.flex}>{text}</Typography>
            {showShare && <IconButton><Share/></IconButton>}
            {showCategory && (
              <IconButton onClick={this.entoClassifyPage}><ViewModule/></IconButton>
            )}
            {
              showCart && (
                <IconButton onClick={this.entoCartPage}>
                  <Badge
                    classes={{badge: classes.cartBadge}}
                    badgeContent={badge || 0}>
                      <ShoppingCart/>
                  </Badge>
                </IconButton>
              )
            }
            {showSearch && <IconButton onClick={this.entoSearchPage}><Search/></IconButton>}
            {showInput && (
              <TextField
                defaultValue=""
                onKeyDown={this.handleKeyDown}
                onChange={this.handleInputChange}
                autoFocus={true}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.inputRoot,
                  },
                }}
              />
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(ToolBar);
