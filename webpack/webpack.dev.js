const webpack = require('webpack');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

const { DIST_DIR, MODES, ENV_DEV_FILE } = require('./webpack.constants');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: MODES.DEVELOPMENT,
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    contentBase: DIST_DIR,
    port: process.env.PORT,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: ENV_DEV_FILE,
    }),
  ],
});
