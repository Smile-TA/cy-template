import pages from "../fixtures/pages.json";

describe("Check pages for robots on prod", function () {
  pages.forEach((page) => {
    it(`on ${page} page`, function () {
      if (Cypress.env("PROD")) {
        this.skip();
      }
      cy.visit(page);
      cy.get('meta[name*="robots"]')
        .should("have.attr", "content")
        .and("not.contain", "noindex, nofollow");
    });
  });
});

describe("Check pages for robots on staging", function () {
  pages.forEach((page) => {
    it(`on ${page} page`, function () {
      if (!Cypress.env("PROD")) {
        this.skip();
      }
      cy.visit(page);
      cy.get('meta[name*="robots"]')
        .should("have.attr", "content")
        .and("contain", "noindex, nofollow");
    });
  });
});
