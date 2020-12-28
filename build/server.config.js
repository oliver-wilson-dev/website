const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const sharedConfig = require('./shared.config');

const entry = path.join(__dirname, '../server/index.js');

const {
  module: {
    rules: {
      jsRule,
      cssRule,
      svgRule
    }
  },
  outputAssetsDir: outputAssetsDirRoot,
} = sharedConfig;

const outputAssetsDir = path.join(outputAssetsDirRoot, '/server');

module.exports = (env, { mode = 'production' }) => {
  const isProd = mode === 'production';

  return {
    mode,
    target: 'node',
    node: {
      __dirname: true,
    },
    entry,
    externals: [
      webpackNodeExternals(),
      {
        global: {}
      }
    ],
    output: {
      path: outputAssetsDir,
      filename: 'server.js',
      chunkFilename: isProd ? '[name]-[hash:8].js' : '[name].js',
      globalObject: 'this',
      publicPath: '/server',
    },
    module: {
      rules: [
        jsRule,
        cssRule,
        svgRule
      ]
    },
    plugins: [
      ...sharedConfig.plugins,
      new webpack.DefinePlugin({
        'process.env.IS_SERVER': JSON.stringify(true),
        'process.env.IS_CLIENT': JSON.stringify(false)
      }),
    ]
  };
};
