const { HOME_PAGE } = Cypress.env('URLS');


describe('The Home Page', () => {
  describe('when the user has not accepted the cookie terms', () => {
    it('successfully loads the homepage and shows the cookie disclaimer banner', () => {
      cy.visit(HOME_PAGE);

      cy.get('h1').should('contain', 'Oliver Wilson');
      cy.get('h1 + h2').should('contain', 'Web developer');
      cy.getCookieBanner();
    });
  });
});
