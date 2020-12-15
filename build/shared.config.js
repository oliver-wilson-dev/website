const path = require('path');

const outputAssetsDir = path.resolve(__dirname, '../dist');

const jsRule = {
  test: /\.js$/,
  use: 'babel-loader',
  exclude: /node_modules/
};

const cssRule = {
  test: /\.css$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[local]_[hash:base64:5]'
      },
    },
    { loader: 'postcss-loader' }
  ]
};

const svgRule = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
};

module.exports = {
  outputAssetsDir,
  module: {
    rules: { jsRule, cssRule, svgRule }
  },
  plugins: []
};
