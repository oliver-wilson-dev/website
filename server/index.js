/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const handleRender = require('./handleRender').default;


const app = express();
if (process.env.NODE_ENV === 'production') {
  // Serve the static files from the dist folder
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  const clientConfig = require('../build/client.config.js');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const initialisedClientConfig = clientConfig(undefined, { mode: 'development' });
  const compiler = webpack(initialisedClientConfig);
  console.log(initialisedClientConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: initialisedClientConfig.output.publicPath,
    writeToDisk: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(compression());

// Allows cookies to be available on req.cookies in subsequent handlers
app.use(cookieParser());

// Handles any requests that don't match the ones above
app.get('*', handleRender);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port} - http://localhost:${port}/`);
