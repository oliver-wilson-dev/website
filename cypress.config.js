const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    experimentalRunAllSpecs: true
  },
  env: {
    URLS: {
      HOME_PAGE: '/',
      ABOUT_PAGE: '/about',
      PROJECTS_PAGE: '/projects'
    }
  },
});
