/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import global from 'global';
import createStoreCustom from './createStore';
import rootReducer from './reducers';

jest.mock('redux');
jest.mock('global', () => ({
  window: {
    __REDUX_DEVTOOLS_EXTENSION__: jest.fn().mockReturnValue(Symbol('test-redux-devtools'))
  }
}));
jest.mock('./reducers', () => Symbol('test-root-reducer'));


describe('createStore', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should be called with the rootReducer and the redux devtools extension method on the window', () => {
    createStoreCustom();
    expect(createStore)
      .toHaveBeenCalledWith(rootReducer, global.window.__REDUX_DEVTOOLS_EXTENSION__());
  });
});
