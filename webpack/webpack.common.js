const HtmlWebpackPlugin = require('html-webpack-plugin');

const { APP_ENTRY, DIST_DIR, APP_TEMPLATE } = require('./paths');

module.exports = {
  entry: APP_ENTRY,
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
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
