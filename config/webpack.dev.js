const webpack = require('webpack');

const { DIST_DIR, POSTCSS_CONFIG_DIR } = require('./paths');

const MODE = 'development';

module.exports = {
  mode: MODE,
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: POSTCSS_CONFIG_DIR,
                ctx: { mode: MODE },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
