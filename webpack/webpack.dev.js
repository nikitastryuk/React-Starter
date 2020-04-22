const webpack = require('webpack');

const { DIST_DIR, POSTCSS_CONFIG_DIR, MODES } = require('./constants');

module.exports = {
  mode: MODES.DEVELOPMENT,
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
                ctx: { mode: MODES.DEVELOPMENT },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
