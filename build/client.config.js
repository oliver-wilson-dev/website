const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const LoadablePlugin = require('@loadable/webpack-plugin');

const sharedConfig = require('./shared.config');

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

const outputAssetsDir = path.join(outputAssetsDirRoot, '/client');
const publicFolderDir = path.join(__dirname, '../public');
const hydrateDir = path.resolve(__dirname, '../src');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env)
  .reduce((prev, next) => ({
    ...prev,
    process:
      {
        env: {
          ...(prev.process && prev.process.env && prev.process.env) || {},
          [next]: JSON.stringify(env[next])
        }
      }
  }), {});

module.exports = (env, { mode = 'production' }) => {
  const isProd = mode === 'production';

  return {
    mode,
    entry: [
      hydrateDir,
      ...isProd
        ? []
        : ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true']],
    output: {
      path: outputAssetsDir,
      filename: 'client.js',
      chunkFilename: isProd ? '[name]-[hash:8].js' : '[name].js',
      publicPath: '/client/',
    },
    devServer: {
      compress: true,
      port: 9000,
      historyApiFallback: true,
    },
    externals: {
      global: 'window'
    },
    module: {
      rules: [
        jsRule,
        cssRule,
        svgRule
      ]
    },
    devtool: isProd ? undefined : 'source-map',
    plugins: [
      new LoadablePlugin(),
      ...sharedConfig.plugins,
      new webpack.DefinePlugin({
        ...envKeys,
        'process.env.IS_SERVER': JSON.stringify(false),
        'process.env.IS_CLIENT': JSON.stringify(true)
      }),
      new CopyPlugin({
        patterns: [
          {
            from: publicFolderDir,
            to: path.join(outputAssetsDirRoot, '/public')
          },
          {
            from: path.resolve(__dirname, '../src/template.html'),
            to: path.join(outputAssetsDir)
          },
        ],
      }),
      ...isProd ? [] : [new webpack.HotModuleReplacementPlugin()],
    ]
  };
};
