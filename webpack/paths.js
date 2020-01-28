// TODO: Add webpack paths
const { resolve } = require('path');

module.exports = {
  output: resolve(__dirname, '../', 'dist'),
  entry: resolve(__dirname, '../', 'src/index.js'),
  public: resolve(__dirname, '../', 'public'),
};
