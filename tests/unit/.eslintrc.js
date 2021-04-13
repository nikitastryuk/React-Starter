module.exports = {
  extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
  plugins: ['testing-library', 'jest'],
  env: {
    jest: true,
  },
  rules: {
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/prefer-to-have-length': 1,
    'jest/valid-expect': 2,
  },
};
