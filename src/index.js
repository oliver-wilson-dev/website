import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import window from 'global';
import createStore from './state/createStore';
import App from './containers/App';
import Router from './components/Router';

hydrate(
  <Provider store={createStore()}>
    <Router>
      <App />
    </Router>
  </Provider>, window.document.getElementById('app')
);
