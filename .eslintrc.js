module.exports = {
  parser: 'babel-eslint',
  // Extends uses a config file which applies set of rules.
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  // Plugin provides a set of rules to apply manually.
  plugins: ['react', 'react-hooks', 'prettier', 'sort-imports-es6-autofix'],
  // An environment defines global variables that are predefined.
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    // Js
    'no-use-before-define': [
      2,
      {
        functions: false,
      },
    ],
    'no-unused-vars': 1,
    'no-debugger': 0,
    // Imports
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    // React
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/button-has-type': 0,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
