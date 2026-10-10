const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests', timeout: 30000, expect: { timeout: 8000 }, retries: 0, workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: process.env.BASE_URL || 'http://13.200.185.1/c/sonam-c06faf/', browserName: 'chromium', headless: true, screenshot: 'only-on-failure', trace: 'retain-on-failure' }
});
