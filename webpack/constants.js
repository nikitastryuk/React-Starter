const { resolve } = require('path');

const ROOT_DIR = resolve(__dirname, '../');
const SRC_DIR = resolve(ROOT_DIR, './src');
const PUBLIC_DIR = resolve(ROOT_DIR, './public');

const APP_ENTRY = resolve(SRC_DIR, './index.js');
const APP_TEMPLATE = resolve(PUBLIC_DIR, './index.html');
const FAV_ICON = resolve(PUBLIC_DIR, './favicon.ico');
const DIST_DIR = resolve(ROOT_DIR, './dist');

const MODES = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

module.exports = {
  APP_ENTRY,
  APP_TEMPLATE,
  FAV_ICON,
  DIST_DIR,
  MODES,
};
