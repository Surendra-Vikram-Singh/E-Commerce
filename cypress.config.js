import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 's3rdp6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
