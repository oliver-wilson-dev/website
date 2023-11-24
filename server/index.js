/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const handleRender = require('./handleRender').default;

const app = express();

/*
  Compression middleware,
  must be used before any middleware that will send a response in order to compress data sent
*/
app.use(compression());

if (process.env.NODE_ENV === 'production') {
  // Serve the static files from the dist folder
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use('/public', express.static(path.resolve(__dirname, '../dist/public')));

  const clientConfig = require('../build/client.config.js');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const initialisedClientConfig = clientConfig(undefined, {
    mode: 'development',
  });
  const compiler = webpack(initialisedClientConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: initialisedClientConfig.output.publicPath,
      writeToDisk: true,
    })
  );

  app.use(webpackHotMiddleware(compiler));
}

// Allows cookies to be available on req.cookies in subsequent handlers
app.use(cookieParser());

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/sitemap.xml'));
});

// Handles any requests that don't match the ones above
app.get('*', handleRender);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port} - http://localhost:${port}/`);
