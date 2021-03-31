const { ROUTE_PATHS } = require('routes');

beforeEach(() => {
  cy.login();
});

it('should visit main page', () => {
  cy.url().should('contain', ROUTE_PATHS.MAIN);
});
