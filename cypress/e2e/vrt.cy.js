import screenSizes from "../fixtures/screenSizes.json";
import pages from "../fixtures/pages.json";

describe("Capture screenshots", () => {
  pages.forEach((page) => {
    context(` for ${page}`, () => {
      screenSizes.forEach((size) => {
        it(` at ${size} viewport size`, () => {
          if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1]);
          } else {
            cy.viewport(size);
          }

          cy.visit(page);

          cy.sauceVisualCheck(`${page} at ${size} size`);
        });
      });
    });
  });
});
