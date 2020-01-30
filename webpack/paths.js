// TODO: Add webpack paths
import { resolve } from 'path';

module.exports = {
  output: resolve(__dirname, '../', 'dist'),
  entry: resolve(__dirname, '../', 'src/index.js'),
  public: resolve(__dirname, '../', 'public'),
};
