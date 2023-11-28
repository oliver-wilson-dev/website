import { URLS } from '../config/urls';

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit(URLS.HOME_PAGE);

    cy.get('h1').should('contain', 'Oliver Wilson');
    cy.get('h1 + h2').should('contain', 'Web developer');
    cy.cookieBannerLearnMore();
  });
});
