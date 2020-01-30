const { resolve } = require('path');

const ROOT_DIR = resolve(__dirname, '../');
const SRC_DIR = resolve(ROOT_DIR, './src');

const APP_ENTRY = resolve(SRC_DIR, './index.js');
const APP_TEMPLATE = resolve(ROOT_DIR, './public/index.html');
const DIST_DIR = resolve(ROOT_DIR, './dist');
const SCSS_SPACINGS = resolve(SRC_DIR, './scss/spacings.scss');
const POSTCSS_CONFIG_DIR = resolve(__dirname);

module.exports = {
  APP_ENTRY,
  DIST_DIR,
  APP_TEMPLATE,
  SCSS_SPACINGS,
  POSTCSS_CONFIG_DIR,
};
