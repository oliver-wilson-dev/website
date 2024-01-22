const { allViewports } = require('../utils/allViewports');
const { cookieBannerTests } = require('../shared/cookieBanner');

const { HOME_PAGE } = Cypress.env('URLS');


describe('The Home Page', () => {
  allViewports(() => {
    it('successfully loads the homepage', () => {
      cy.visit(HOME_PAGE);

      cy.get('h1').should('contain', 'Oliver Wilson');
      cy.get('h1 + h2').should('contain', 'Web developer');
    });

    cookieBannerTests(HOME_PAGE);
  });
});
