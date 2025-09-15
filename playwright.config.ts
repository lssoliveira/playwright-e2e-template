import { defineConfig, devices } from '@playwright/test';
import { GitHubActionOptions } from '@estruyf/github-actions-reporter';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, `./config/.env.${process.env.ENV || 'dev'}`),
});

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : 3,
  reporter: process.env.CI
    ? [
      [
        '@estruyf/github-actions-reporter',
        <GitHubActionOptions>{
          title: 'Reporter details',
          useDetails: true,
          showError: true,
        },
      ],
      ['allure-playwright'],
    ]
    : [['line'], ['allure-playwright']],

  use: {
    baseURL: process.env.BASE_URL,
    locale: 'pt-br',
    extraHTTPHeaders: { 'Accept-Language': 'pt-br' },
    trace: 'on-first-retry',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'off',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
