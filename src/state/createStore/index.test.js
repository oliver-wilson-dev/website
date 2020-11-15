/* eslint-disable no-underscore-dangle */

const mockComposeRes = Symbol('test-compose');
const mockMiddlewares = [Symbol('test-middleware'), Symbol('test-middleware')];

let createStoreCustom; let
  window;

const mockCompose = jest.fn();
const mockCreateStore = jest.fn();
const mockApplyMiddleware = jest.fn();
const mockRootReducer = Symbol('test-root-reducer');
const mockPreloadedState = Symbol('test-preloaded-state');

describe('createStore', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();

    jest.doMock('./middlewareProvider', () => ({
      __esModule: true,
      default: jest.fn(() => mockMiddlewares)
    }));

    jest.doMock('../reducers', () => mockRootReducer);

    jest.doMock('global', () => ({
      __PRELOADED_STATE__: mockPreloadedState,
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: jest.fn().mockReturnValue(Symbol('test-redux-devtools'))
    }));

    jest.doMock('redux', () => ({
      __esModule: true,
      compose: mockCompose,
      createStore: mockCreateStore,
      applyMiddleware: mockApplyMiddleware
    }));

    mockCompose.mockReturnValue(mockCompose);
    window = require('global');
    createStoreCustom = require('./index').default;
  });


  const makeCommonAssertions = () => {
    it('should call apply middleware with the result of getMiddlewares', () => {

      createStoreCustom();
      expect(mockApplyMiddleware)
        .toHaveBeenCalledWith(...mockMiddlewares);
    });
  };

  describe('when __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is on the window', () => {
    makeCommonAssertions();
    it('should be called with the rootReducer and the redux devtools extension method on the window', () => {
      createStoreCustom();
      expect(mockCreateStore)
        .toHaveBeenCalledWith(mockRootReducer, mockPreloadedState, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
    });
  });

  describe('when __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is not on the window', () => {
    beforeEach(() => {
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
    });

    makeCommonAssertions();
    it('should be called with the rootReducer and the redux devtools extension method on the window', () => {
      createStoreCustom();
      expect(mockCreateStore)
        .toHaveBeenCalledWith(mockRootReducer, mockPreloadedState, mockCompose);
    });
  });
});
