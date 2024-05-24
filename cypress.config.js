const { defineConfig } = require("cypress");
const { CypressSauceVisual } = require("@saucelabs/cypress-visual-plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    saucelabs: {
      buildName: process.env.BASE_URL.includes("staging")
        ? "Baseline -- Prod"
        : "Baseline -- Staging",
      project: process.env.PROJECT_NAME,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

      CypressSauceVisual.register(on, config);
    },
  },
});
