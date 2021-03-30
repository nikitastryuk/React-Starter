// TODO: Why cy lists this file?
const { ROUTE_PATHS } = require('app/routing/routePaths');

Cypress.Commands.add('login', () => {
  cy.visit(ROUTE_PATHS.LOGIN);
  cy.get('button[type=submit]').click();
  cy.get('[data-testid="main-page"]').should('be.visible');
});
