import pages from "../fixtures/pages.json";

describe("Check pages contain only one h1 element", () => {
  pages.forEach((page) => {
    it(`on ${page} page`, () => {
      cy.visit(page);
      cy.get("h1").then(($el) => {
        expect($el.length).to.be.eq(1);
      });
    });
  });
});
