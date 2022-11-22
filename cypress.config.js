const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "15zbgq", // Key for t/est dashboard runs
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://onetrack.industrack.com",
    // baseUrl: "https://onetrackui.azurewebsites.net/",
    numTestsKeptInMemory: 0,
    

    // experimentalSessionAndOrigin: true,
  },
  env: {
    login_username: "andreiv@industrack.com",
    login_password: "admin",
  },
  integration: {
    baseUrl: "https://onetrack.industrack.com",
  },
  // "numTestsKeptInMemory": 0,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    reportFilename: "[status]_[datetime]-[name]-report",
    title: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    charts: true,
    html: false,
    json: true,
    embeddedScreenshots: true,
    overwrite: true,
    inlineAssets: true,
    enableCharts: true,
  },
  // reporterOptions: {
  //   mochaFile: `result/results-[hash].xml`
  // },
  compilerOptions: {
    types: ["jest", "node"],
  },
  requestTimeout: 30000,
  numTestsKeptInMemory: 0,
  numTestsKeptInMemory: 0,
  responseTimeout: 30000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 30000,
  video: true,
  experimentalSingleTabRunMode: true,
  watchForFileChanges: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  experimentalStudio: true
});
