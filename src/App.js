import React, { Component } from 'react';
import 'typeface-roboto';
import route from '@/router/router';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const style = {
  mainContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    overflow: 'scroll',
    fontSize: '14px'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={style.mainContent}>
          {route}
        </div>
      </Provider>
    );
  }
}

export default App;
