const webpack = require('webpack');
const { merge } = require('webpack-merge');

const { DIST_DIR, MODES } = require('./constants');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: MODES.DEVELOPMENT,
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
