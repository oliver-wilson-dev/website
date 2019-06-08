const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectRootDir = path.join(__dirname, '../index.html');
const outputAssetsDir = path.join(__dirname, '../');
const entryDir = path.join(__dirname, '../src');

module.exports = {
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      filename: projectRootDir,
    })
  ]
};
