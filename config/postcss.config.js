module.exports = ({ options }) => {
  const isProduction = options.mode === 'production';
  return {
    plugins: {
      'postcss-nested': true,
      autoprefixer: isProduction,
      // cssnano: isProduction,
    },
  };
};
