const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const { MODES } = require('./webpack.constants');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: MODES.PRODUCTION,
  plugins: [new CleanWebpackPlugin()],
});
