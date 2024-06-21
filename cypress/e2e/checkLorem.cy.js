import pages from "../fixtures/pages.json";

describe("Check pages for Lorem ipsum", () => {
  pages.forEach((page) => {
    it(`on ${page} page`, () => {
      cy.visit(page);
      // queries entire document
      // Ref: https://docs.cypress.io/api/commands/contains#Scopes
      cy.contains("Lorem ipsum", { matchCase: false }).should("not.exist");
      cy.wait(50)
    });
  });
});
