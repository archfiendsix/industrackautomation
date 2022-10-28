const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: "15zbgq", // Key for t/est dashboard runs
  projectId: "vsg82k", // Key for Industrack 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://onetrack.industrack.com",
    numTestsKeptInMemory: 0,
    "numTestsKeptInMemory": 0,
  },
  integration: {
    baseUrl: "https://onetrack.industrack.com"
  },
  // "numTestsKeptInMemory": 0,
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "reportFilename": "[status]_[datetime]-[name]-report",
    "title": "[status]_[datetime]-[name]-report",
    "timestamp": "longDate",
    "charts": true,
    "html": false,
    "json": true,
    "embeddedScreenshots": true,
    "overwrite": true,
    "inlineAssets": true,
    "enableCharts": true,
  },
  // reporterOptions: {
  //   mochaFile: `result/results-[hash].xml`
  // },
  "compilerOptions": {
    "types": ["jest", "node"]
  },
  requestTimeout: 30000,
  numTestsKeptInMemory: 0,
  "numTestsKeptInMemory": 0,
  responseTimeout: 30000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 30000,                                                                                                                                                                                    
  video: true,
});
