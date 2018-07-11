import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import * as Components from './AsynComponent.js';

const routeConfig = (
  <Router>
    <Switch>
      <Route exact path="/" component={Components.Home}/>
      <Route path="/original" component={Components.Original}/>
      <Route path="/bookStore" component={Components.BookStore}/>
      <Route path="/my" component={Components.My}/>
      <Route path="/classification" component={Components.Classification}/>
      <Route path="/search" component={Components.Search}/>
      <Route path="/bookDetail" component={Components.BookDetail}/>
      <Route path="/originalBook" component={Components.OriginalBook}/>
      <Route path="/bookList" component={Components.BookList}/>
      <Route path="/joinTheCreation" component={Components.JoinTheCreation}/>
      <Route path="/cart" component={Components.Cart}/>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
)
export default routeConfig;