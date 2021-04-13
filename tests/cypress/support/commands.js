const { ROUTE_PATHS } = require('routes');

Cypress.Commands.add('login', () => {
  cy.visit(ROUTE_PATHS.LOGIN);
  cy.get('button[type=submit]').click();
  cy.get('[data-testid="main-page"]', { timeout: 5000 }).should('be.visible');
});
