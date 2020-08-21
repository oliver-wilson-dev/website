const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const outputAssetsDir = path.join(__dirname, '../dist');
const projectRootFileDir = path.join(outputAssetsDir, '/index.html');
const entryDir = path.join(__dirname, '../src');

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

module.exports = (env, { mode }) => ({
  entry: entryDir,
  output: {
    path: outputAssetsDir,
    filename: 'index.bundle.js'
  },
  devServer: {
    compress: true,
    port: 9000
  },
  externals: {
    global: 'window'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            },
          },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      filename: projectRootFileDir,
      templateParameters: { BUILD_NUMBER: mode === 'production' ? process.env.BUILD_NUMBER : envKeys.process.env.BUILD_NUMBER }
    })
  ]
});
