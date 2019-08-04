/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import global from 'global';
import createStoreCustom from '.';
import rootReducer from '../reducers';
import getMiddlewares from './middlewareProvider';

const mockCompose = Symbol('test-compose');
const mockMiddlewares = [Symbol('test-middleware'), Symbol('test-middleware')];

jest.mock('redux');
jest.mock('global', () => ({
  window: {}
}));
jest.mock('../reducers', () => Symbol('test-root-reducer'));
jest.mock('./middlewareProvider');


describe('createStore', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    getMiddlewares.mockReturnValue(mockMiddlewares);
    compose.mockReturnValue(mockCompose);
    global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = jest.fn().mockReturnValue(Symbol('test-redux-devtools'));
  });


  const makeCommonAssertions = () => {
    it('should call apply middleware with the result of getMiddlewares', () => {
      createStoreCustom();
      expect(applyMiddleware)
        .toHaveBeenCalledWith(...mockMiddlewares);
    });
  };

  describe('when __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is on the window', () => {
    makeCommonAssertions();
    it('should be called with the rootReducer and the redux devtools extension method on the window', () => {
      createStoreCustom();
      expect(createStore)
        .toHaveBeenCalledWith(rootReducer, global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
    });
  });

  describe('when __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is not on the window', () => {
    beforeEach(() => {
      global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
    });

    makeCommonAssertions();
    it('should be called with the rootReducer and the redux devtools extension method on the window', () => {
      createStoreCustom();
      expect(createStore)
        .toHaveBeenCalledWith(rootReducer, mockCompose);
    });
  });
});
