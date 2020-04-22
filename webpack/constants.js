const { resolve } = require('path');

const ROOT_DIR = resolve(__dirname, '../');
const SRC_DIR = resolve(ROOT_DIR, './src');
const PUBLIC_DIR = resolve(ROOT_DIR, './public');

const APP_ENTRY = resolve(SRC_DIR, './index.js');
const APP_TEMPLATE = resolve(PUBLIC_DIR, './index.html');
const DIST_DIR = resolve(ROOT_DIR, './dist');
const POSTCSS_CONFIG_DIR = resolve(__dirname);

const MODES = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

module.exports = {
  APP_ENTRY,
  APP_TEMPLATE,
  DIST_DIR,
  POSTCSS_CONFIG_DIR,
  MODES,
};
