/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, compose } from 'redux';
import global from 'global';
import rootReducer from '../reducers';
import getMiddlewares from './middlewareProvider';


export default () => {
  const composeEnhancer = global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...getMiddlewares()))
  );
};
