module.exports = {
  extends: ['plugin:cypress/recommended'],
  plugins: ['cypress'],
  env: {
    'cypress/globals': true,
  },
  rules: {
    'cypress/no-assigning-return-values': 2,
    'cypress/no-unnecessary-waiting': 2,
    'cypress/assertion-before-screenshot': 1,
    'cypress/no-force': 1,
  },
};
