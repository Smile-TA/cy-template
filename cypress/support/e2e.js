// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import "@saucelabs/cypress-visual-plugin/commands";
import "@cypress-audit/lighthouse/commands";

beforeEach(() => {
  // ignore errors from the site itself
  // https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/fundamentals__dynamic-tests/cypress/e2e/viewports-spec.cy.js
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  if (Cypress.env("withSession")) {
    cy.session("login", () => {
      cy.visit("wp-login.php");
      cy.get("#user_login").type(Cypress.env("USR_NAME"));
      cy.get("#user_login").clear().type(Cypress.env("USR_NAME"));
      cy.get("#user_pass").type(Cypress.env("USR_PSW"));
      cy.get("form").contains("Log In").click();
      cy.url().should("contain", "/wp-admin/");
    });
  }
});
