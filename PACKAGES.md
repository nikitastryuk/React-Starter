> ### Babel
>
> - **@babel/core** // Compiler core
> - **@babel/plugin-proposal-nullish-coalescing-operator** // Enable let foo = object.foo ?? "default"; syntax.
> - **@babel/plugin-proposal-optional-chaining** // Enable const baz = obj?.foo?.bar?; syntax.
> - **@babel/plugin-syntax-dynamic-import** // Enable dynamic imports.
> - **@babel/plugin-transform-runtime** // Enable async await support.
> - **@babel/preset-env** // Allows to use the latest JavaScript and makes bundle smaller.
> - **@babel/preset-react** // Allows to use React.
> - **babel-plugin-module-resolver** // Lets to specify all the folders you need shortcuts (aliases) for your module imports.
> - **babel-plugin-styled-components** // Allows to use Styled-components.
> - **babel-plugin-transform-react-remove-prop-types** // Removes Prop Types in production mode.
> - **babel-plugin-react-remove-properties** // Removes selectors like "data-test" in production mode.

> ### Webpack
>
> - **webpack-dev-server** // Keeps bundle files in memory and serves them.
> - **webpack-merge** // Provides a merge function that concatenates arrays and merges objects.
> - **webpack-bundle-analyzer** // Visualize size of webpack output files with an interactive zoomable treemap.
> - **babel-loader** // Allows transpiling JavaScript files using Babel and webpack.
> - **html-webpack-plugin** // Simplifies creation of HTML files to serve your webpack bundles.
> - **eslint-webpack-plugin** // ESLint plugin for webpack.
> - **clean-webpack-plugin** // Plugin to remove/clean your build folder(s).

> ### EsLint
>
> - **babel-eslint** // Compiler parser
>
> #### Airbnb
>
> - **eslint-config-airbnb**
>   It requires peer next dependencies: **eslint-plugin-jsx-a11y**, **eslint-plugin-react-hooks**, **eslint-plugin-import**, **eslint-plugin-react**.
> - **eslint-plugin-jsx-a11y** // Static AST checker for accessibility rules on JSX elements.
> - **eslint-plugin-react-hooks** // React hooks specific linting rules.
> - **eslint-plugin-import** // Support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
> - **eslint-plugin-react** // React specific linting rules.
>
> #### Prettier
>
> - **eslint-config-prettier** // Turns off all rules that are unnecessary or might conflict with Prettier and extends the style guide to match prettier.
> - **eslint-plugin-prettier** // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
>
> #### Others
>
> - **eslint-plugin-jest** // Jest specific linting rules.
> - **eslint-plugin-cypress** // Cypress specific linting rules.
> - **eslint-plugin-testing-library** // React testing library specific linting rules.
> - **eslint-import-resolver-babel-module** // Resolver for eslint-plugin-import (to configure aliases).
> - **eslint-plugin-sort-imports-es6-autofix** // A sort-imports rule that properly distinguishes between ES6 import types and that is also able to autofix all detected problems.

> ### StyleLint
>
> - **stylelint-config-prettier** // Turns off all rules that are unnecessary or might conflict with Prettier.
> - **stylelint-config-rational-order** // Sorts related property declarations by grouping together.
> - **stylelint-config-standard** // Extends recommended stylelint config.
> - **stylelint-config-styled-components** // Config to disable stylelint rules that clash with styled-components.
