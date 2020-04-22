const HtmlWebpackPlugin = require('html-webpack-plugin');

const { APP_ENTRY, DIST_DIR, APP_TEMPLATE } = require('./constants');

module.exports = {
  entry: APP_ENTRY,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: APP_TEMPLATE,
    }),
  ],
};
