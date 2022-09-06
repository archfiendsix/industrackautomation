const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "txtefo",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://onetrack.industrack.com"
  },
  integration: {
    baseUrl: "https://onetrack.industrack.com"
  },
  "reporter": "allure",
  // "reporterOptions": {
  //   "reportDir": "cypress/report/mochawesome-report",
  //   "reportFilename": "[status]_[datetime]-[name]-report",
  //   "title": "[status]_[datetime]-[name]-report",
  //   "timestamp": "longDate",
  //   "charts": true,
  //   "html": false,
  //   "json": true,
  //   "embeddedScreenshots":true,
  //   "overwrite":false,
  //   "inlineAssets": true,
  //   "enableCharts":true,
  // },
  "compilerOptions": {
    "types": ["jest", "node"]
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true
});
