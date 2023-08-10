import { defineConfig } from 'cypress'

export default defineConfig({
   viewportHeight: 1000,
   viewportWidth: 1200,
   defaultCommandTimeout: 10000,
   video: false,
   screenshotOnRunFailure: false,
   watchForFileChanges: false,
   reporter: 'mochawesome',
   reporterOptions: {
      reportFilename: 'conduit-[name]-[status]-[datetime]',
      timestamp: 'longDate',
   },
   e2e: {
      baseUrl: 'http://localhost:4200/',
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
   },
})