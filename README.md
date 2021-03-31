# React Starter Kit

## Tech Stack

- **React / React Router**
- **Styled-components / Styled-icons**
- **Axios / React-Query**
- **React-i18next**
- **EsLint / StyleLint / Prettier**
- **Babel / Webpack**
- **Simple-git-hooks / Lint-staged**
- **Jest / Cypress / Rtl**

### Running the project

- Run `npx simple-git-hooks` to set all git hooks
- Run `npm i` to install dependencies

### Commonly used scripts

| `npm <script>` | Description                                               |
| -------------- | --------------------------------------------------------- |
| `dev`          | Serves app at `localhost:8080` with hot reloading enabled |
| `build`        | Builds the application to ./build                         |
| `test:unit`    | Runs all Unit tests                                       |
| `cypress`      | Opens Cypress                                             |
| `format:check` | Runs Prettier                                             |
| `lint:js`      | Runs EsLint                                               |
| `lint:style`   | Runs StyleLint                                            |
| `deploy`       | Deploys to Github Pages                                   |

### CI jobs

- Install and Cache dependencies
- Run Format & Lint (Prettier, EsLint, StyleLint)
- Run e2e tests (Cypress)
- Run Unit tests (Jest)
- Build and Deploy (gh-pages)
