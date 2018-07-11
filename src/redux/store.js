import { createStore, combineReducers } from 'redux';
import * as carReducer from './reducer/carReducer';

const store = createStore(
  combineReducers({
    ...carReducer
  }),
  // 开启redux调试工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;