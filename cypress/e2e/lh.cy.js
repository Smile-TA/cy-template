import pages from "../fixtures/pages.json";

describe("Check pages contain only one h1 element", () => {
  pages.forEach((page) => {
    it(`on ${page} page`, () => {
      cy.visit(page);
      cy.lighthouse(
        {
          performance: 60,
          accessibility: 90,
          "best-practices": 80,
          seo: 80,
        },
        {
          formFactor: "desktop",
          screenEmulation: {
            mobile: false,
            disable: false,
            width: Cypress.config("viewportWidth"),
            height: Cypress.config("viewportHeight"),
            deviceScaleRatio: 1,
          },
        }
      );
    });
  });
});
