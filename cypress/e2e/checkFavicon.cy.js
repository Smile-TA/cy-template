import pages from "../fixtures/pages.json";

describe("Check pages contains favicon links", () => {
  pages.forEach((page) => {
    it(`on ${page} page`, () => {
      cy.visit(page);
      cy.get('link[rel*="icon"]');
      cy.wait(50)
    });
  });
});
