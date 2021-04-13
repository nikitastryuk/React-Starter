const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const commonConfig = require('./webpack.common.js');
const prodConfig = require('./webpack.prod');

const config = merge(commonConfig, prodConfig);
config.plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true }));

module.exports = config;
