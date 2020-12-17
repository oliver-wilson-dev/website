import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import global from 'global';
import createStore from './state/createStore';
import App from './containers/App';
import Router from './components/Router';

const mockStore = {
  mockKey: Symbol('test-store-value')
};
const mockElement = Symbol('test-app-div');

jest.mock('react-dom');
jest.mock('react-redux');
jest.mock('./state/createStore');
jest.mock('./containers/App', () => () => null);
jest.mock('./components/Router', () => ({ children }) => children);
jest.mock('global', () => ({
  document: {
    getElementById: jest
      .fn()
      .mockReturnValue(mockElement)
  }
}));

describe('application root', () => {
  beforeEach(() => {
    createStore.mockReturnValueOnce(mockStore);
  });

  it('returns the App container, wrapped with the redux state provider set up with the store', () => {
    require('./index');
    expect(hydrate).toHaveBeenCalledWith(
      <Provider store={mockStore}>
        <Router>
          <App />
        </Router>
      </Provider>, global.document.getElementById('app')
    );
  });
});
