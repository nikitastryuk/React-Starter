module.exports = {
  extends: ['plugin:cypress/recommended', 'plugin:testing-library/react', 'plugin:jest/recommended'],
  // Plugin provides a set of rules to apply manually.
  plugins: ['cypress', 'testing-library', 'jest'],
  // An environment defines global variables that are predefined.
  env: {
    jest: true,
    'cypress/globals': true,
  },
  rules: {
    // Jest
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/prefer-to-have-length': 1,
    'jest/valid-expect': 2,
    // Cypress
    'cypress/no-assigning-return-values': 2,
    'cypress/no-unnecessary-waiting': 2,
    'cypress/assertion-before-screenshot': 1,
    'cypress/no-force': 1,
  },
};
