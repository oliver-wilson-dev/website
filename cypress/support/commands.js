// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getCookieBanner', () => cy.get('[role="region"][aria-labelledby="cookieText"]').contains('Attention! This site uses cookies.'));

Cypress.Commands.add('getCookiePolicyModal', () => cy.get('[role="dialog"][aria-labelledby="cookiePolicyDialogTitle"][aria-describedby="cookiePolicyDialogDesc"]').should('exist'));

Cypress.Commands.add('cookieBannerLearnMore', () => {
  cy.getCookieBanner().within(() => {
    cy.get('button').contains('Learn More').click();
  });


  cy.getCookiePolicyModal().within(() => {
    cy.get('#cookiePolicyDialogTitle').should('exist');
    cy.get('#cookiePolicyDialogDesc').should('exist');
    cy.screenshot();
    cy.get('button[aria-label="close cookie policy modal"]').click();
  });
});
