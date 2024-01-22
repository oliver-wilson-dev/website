export const cookieBannerTests = (pagePath) => {
  describe('when the user has not accepted the cookie terms', () => {
    it('shows the cookie disclaimer banner on page load', () => {
      cy.visit(pagePath);

      cy.getCookieBanner();
    });

    describe('when the user clicks "Learn More"', () => {
      it('should show the full cookie policy dialog', () => {
        cy.visit(pagePath);

        cy.cookieBannerLearnMore();
      });
    });

    describe('when the cookie policy is accepted', () => {
      beforeEach(() => {
        cy.visit(pagePath);

        cy.acceptCookiePolicy();
      });


      it('should hide the cookie popup', () => {
        cy.getCookieBanner().should('not.exist');
      });

      describe('when the user reloads the page', () => {
        it('should not show the cookie popup', () => {
          cy.getCookieBanner().should('not.exist');

          cy.reload();

          cy.getCookieBanner().should('not.exist');
        });
      });
    });
  });
};
