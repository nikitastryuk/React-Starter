# React Starter Kit

## Tech Stack

- **React / React Router**
- **Styled-components**
- **React-i18next**
- **EsLint / StyleLint / Prettier**
- **Babel / Webpack**
- **Husky / Lint-staged**
- **Jest / Cypress / Rtl**

### EsLint

#### Airbnb

- **eslint-config-airbnb**
  It requires peer next dependencies: **eslint-plugin-jsx-a11y**, **eslint-plugin-react-hooks**, **eslint-plugin-import**, **eslint-plugin-react**.

  - **eslint-plugin-jsx-a11y** // Static AST checker for accessibility rules on JSX elements.
  - **eslint-plugin-react-hooks** // React hooks specific linting rules.
  - **eslint-plugin-import** // Support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
  - **eslint-plugin-react** // React specific linting rules.

#### Prettier

- **eslint-config-prettier** // Turns off all rules that are unnecessary or might conflict with Prettier and extends the style guide to match prettier.
- **eslint-plugin-prettier** // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

#### Other

- **eslint-plugin-jest** // Jest specific linting rules.
- **eslint-plugin-cypress** // Cypress specific linting rules.
- **eslint-plugin-jest** // React testing library specific linting rules.
- **eslint-import-resolver-babel-module** // Resolver for eslint-plugin-import (to configure aliases).
- **eslint-plugin-sort-imports-es6-autofix** // A sort-imports rule that properly distinguishes between ES6 import types and that is also able to autofix all detected problems.

## Running the Project

After installing modules, you're ready to start the project!

| `npm <script>` | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| `dev`          | Serves your app at `localhost:8080` with hot reloading enabled |
| `build`        | Builds the application to ./dist                               |
| `test`         | Runs all unit tests                                            |
| `cypress`      | Opens cypress                                                  |

## Deploy

In progress
