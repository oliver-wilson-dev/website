const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const sharedConfig = require('./shared.config');

const {
  module: {
    rules: {
      jsRule,
      cssRule,
      svgRule
    }
  },
  outputAssetsDir,
} = sharedConfig;

const publicFolderDir = path.join(__dirname, '../public');
const projectRootFileDir = path.join(outputAssetsDir, '/index.html');
const entryDir = path.resolve(__dirname, '../src');

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

module.exports = (env, { mode = 'production' }) => ({
  mode,
  entry: [entryDir, ...mode === 'production' ? [] : ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true']],
  output: {
    path: outputAssetsDir,
    filename: 'index.bundle.js',
    publicPath: '/',
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
  devtool: 'source-map',
  plugins: [
    ...sharedConfig.plugins,
    new webpack.DefinePlugin({
      ...envKeys,
      'process.env.IS_SERVER': JSON.stringify(false),
      'process.env.IS_CLIENT': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: projectRootFileDir,
      templateParameters: { BUILD_NUMBER: mode === 'production' ? process.env.BUILD_NUMBER : envKeys.process.env.BUILD_NUMBER }
    }),
    new CopyPlugin({
      patterns: [
        { from: publicFolderDir, to: path.join(outputAssetsDir, '/public') },
      ],
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
