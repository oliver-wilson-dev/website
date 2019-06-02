import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import global from 'global';
import createStore from './state/createStore';
import App from './components/App';

render(
  <Provider store={createStore()}>
    <App />
  </Provider>, global.document.getElementById('app')
);
