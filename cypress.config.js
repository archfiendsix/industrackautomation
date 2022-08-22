const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://onetrack.industrack.com"
  },
  integration: {
    baseUrl: "https://onetrack.industrack.com"
  },
  // "compilerOptions": {
  //   "types": ["jest", "node"]
  // },
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false

});
