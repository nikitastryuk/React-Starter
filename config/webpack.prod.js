const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { DIST_DIR, POSTCSS_CONFIG_DIR } = require('./paths');

const MODE = 'production';

module.exports = {
  mode: MODE,
  devServer: {
    contentBase: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
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
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
