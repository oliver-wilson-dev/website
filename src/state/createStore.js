/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import global from 'global';
import rootReducer from './reducers';

export default () => createStore(
  rootReducer,
  global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__()
);
