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

import '@testing-library/cypress/add-commands';
import { VIEWPORTS } from './constants';

/*
  Cookie banner
*/

Cypress.Commands.add('getCookieBanner', () => cy.findByRole('region', { name: 'Attention! This site uses cookies. Learn More' }));

Cypress.Commands.add('cookieBannerLearnMore', () => {
  cy.getCookieBanner().within(() => {
    cy.findByRole('button', { name: 'Learn More' }).click();
  });

  cy.findByRole('dialog').filter('[aria-labelledby="cookiePolicyDialogTitle"]').filter('[aria-describedby="cookiePolicyDialogDesc"]').should('exist')
    .within(() => {
      cy.get('#cookiePolicyDialogTitle').should('exist');
      cy.get('#cookiePolicyDialogDesc').should('exist');
      cy.get('button[aria-label="close cookie policy modal"]').click();
    });
});

Cypress.Commands.add('acceptCookiePolicy', () => {
  cy.getCookieBanner().within(() => {
    cy.findByRole('button', { name: 'accept cookie policy' }).click();
  });
});

/*
  Viewports
*/

Cypress.Commands.add('setViewportMobile', () => {
  const [width, height] = VIEWPORTS.MOBILE;

  cy.viewport(width, height);
});

Cypress.Commands.add('setViewportTablet', () => {
  const [width, height] = VIEWPORTS.TABLET;

  cy.viewport(width, height);
});

Cypress.Commands.add('setViewportDesktop', () => {
  const [width, height] = VIEWPORTS.DESKTOP;

  cy.viewport(width, height);
});
