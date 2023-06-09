// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /**
   * E:\SwabLab_Dummy_PlayWright\tests\Test_Scrip.spec.js-snapshots\loginImage-Pixel5-win32.png
   */
  updateSnapshots : 'missing',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: "only-on-failure"
    
    
   
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],browserName:'chromium', video: 'on', },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],browserName:'firefox' , video: 'on',},
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],browserName:'webkit' , video: 'on',},
    },

    // /* Test against mobile viewports. */
    {
      name: 'Pixel5',
      use: { ...devices['Pixel 5'],browserName:'chromium', video: 'on', },
    },
    {
      name: 'safari',
      use: { ...devices['iPhone 12'],browserName:'webkit', video: 'on', },
    },
    {
      name: 'iphone12ProMax',
      use: { ...devices['iPhone 12 Pro Max'],browserName:'webkit', video: 'on', },
    },
    {
      name: 'iPadPro11',
      use: { ...devices['iPad Pro 11'],browserName:'webkit' , video: 'on',},
    },


    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

