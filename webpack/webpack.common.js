const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const { APP_ENTRY, DIST_DIR, APP_TEMPLATE, FAV_ICON } = require('./webpack.constants');

module.exports = {
  entry: APP_ENTRY,
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin({
      activeModules: true,
    }),
    new HtmlWebpackPlugin({
      template: APP_TEMPLATE,
      favicon: FAV_ICON,
    }),
    new ESLintPlugin({ failOnError: false }),
  ],
};
