const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputAssetsDir = path.resolve(__dirname, '../dist');

const jsRule = {
  test: /\.js$/,
  use: 'babel-loader',
  exclude: /node_modules/
};

const getCssRule = ({ isProd }) => ({
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: isProd ? '[hash:base64:5]' : '[local]_[hash:base64:5]'
      },
    },
    { loader: 'postcss-loader' }
  ]
});

const svgRule = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
};

const markdownRule = {
  test: /\.md$/i,
  use: 'raw-loader'
};

module.exports = ({ isProd }) => ({
  outputAssetsDir,
  module: {
    rules: {
      jsRule,
      cssRule: getCssRule({ isProd }),
      svgRule,
      markdownRule
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    }),
    new CleanWebpackPlugin(),
  ]
});
