const { defineConfig } = require("cypress");
const { CypressSauceVisual } = require("@saucelabs/cypress-visual-plugin");

const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    excludeSpecPattern: ["cypress/e2e/vrt.cy.js"],
    saucelabs: {
      buildName: process.env.BASE_URL.includes("staging")
        ? "Baseline -- Staging"
        : "Baseline -- Prod",
      project: process.env.PROJECT_NAME,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(), // calling the function is important
      });

      CypressSauceVisual.register(on, config);
    },
  },
});
