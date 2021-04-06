import { ROUTE_PATHS } from 'routes';

beforeEach(() => {
  cy.login();
});

it('should visit main page', () => {
  cy.url().should('contain', ROUTE_PATHS.MAIN);
});
