import pages from "../fixtures/pages.json";

describe("Check pages for meta", () => {
  pages.forEach((page) => {
    it(`on ${page} page`, () => {
      cy.visit(page);
      cy.get('meta[name*="description"]')
        .should("have.attr", "content")
        .should("have.length.greaterThan", 0);
      cy.get('meta[property*="og:description"]')
        .should("have.attr", "content")
        .should("have.length.greaterThan", 0);
    });
  });
});
