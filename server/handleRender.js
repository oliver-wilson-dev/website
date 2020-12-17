/* eslint-disable no-console */
import { renderToString } from 'react-dom/server';
import thunk from 'redux-thunk';

import fs from 'fs';
import path from 'path';

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxStoreProvider } from 'react-redux';
import reducer from '../src/state/reducers';
import App from '../src/containers/App';

import {
  LIGHT_THEME, DARK_THEME, COOKIE_POLICY_ACCEPTED, COOKIE_POLICY
} from '../src/state/actions/constants';
import fetchContent from '../src/state/actions/fetchContent';

const renderFullPage = ({ html, preloadedState, res }) => {
  fs.readFile(path.resolve(__dirname, '../dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    const state = JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c'
    );

    const templateSubstitution = data.replace(
      '<div id="app"></div>',
      `<div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${state}
      </script>`
    );

    return res.send(templateSubstitution);
  });
};

const handleRender = async ({ cookies }, res) => {
  /*
    Create a new Redux store instance.

    We're not fetching the sections data on the server side.
    The action to fetch the sections data is fired in a useEffect hook,
    which is not ran on the server. We could dispatch the request here,
    but then we'd have to account for when this request fails and maybe
    implement some logic to retry the request on the client. We could also
    utilise the actual redux action that is used to facilitate the data fetching,
    but this gets a bit tricky on the server, popular libraries like 'redial' are
    used to facilitate this. One to investigate in the future.

    This means that the sections segment of state will default to:
      sections: {
        sectionsContentFetched: false,
        sections: {}
      },

    We are still setting the theme and checkbox state based on the cookies sent to the server.
    We'll also not show the cookie disclaimer popup if the user has previously accepted it.

    The navigation is closed by default.
  */
  const initialState = {
    sections: {
      sectionsContentFetched: false,
      sections: {}
    },
    theme: {
      theme: cookies.theme || LIGHT_THEME,
      checkBoxChecked: cookies.theme === DARK_THEME
    },
    cookieDisclaimer: {
      showCookiePopup: cookies[COOKIE_POLICY] !== COOKIE_POLICY_ACCEPTED,
      showLearnMore: false
    },
    navigation: {
      showSideNav: false
    }
  };

  const store = createStore(reducer, initialState, applyMiddleware(thunk));

  await fetchContent()(store.dispatch);

  // Render the component to a string
  const html = renderToString(
    <ReduxStoreProvider store={store}>
      <App />
    </ReduxStoreProvider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  renderFullPage({ html, preloadedState, res });
};

export default handleRender;
