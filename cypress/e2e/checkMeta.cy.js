import pages from "../fixtures/pages.json";

describe("Check pages for meta", () => {
  pages.forEach((page) => {
    it(`on ${page} page`, () => {
      cy.visit(page);
      cy.get('meta[name*="description"]');
    });
  });
});
