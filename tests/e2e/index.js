const { ROUTE_PATHS } = require('app/routing/routePaths');

beforeEach(() => {
  cy.login();
});

it('should visit main page', () => {
  cy.url().should('contain', ROUTE_PATHS.MAIN);
});
