const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

const { MODES, ENV_PROD_FILE } = require('./webpack.constants');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: MODES.PRODUCTION,
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: ENV_PROD_FILE,
    }),
  ],
});
