import pages from "../fixtures/pages.json";

describe("Check pages with lighthouse", () => {
  pages.forEach((page) => {
    it(`on ${page} page`, () => {
      cy.visit(page);
      cy.lighthouse(
        {
          performance: 40,
          accessibility: 90,
          "best-practices": 80,
          seo: 60,
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
      cy.wait(50)
    });
  });
});
