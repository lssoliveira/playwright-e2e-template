# Playwright-E2E-Template

template for automated tests using Playwright

- WORKING IN PROGRESS...

## Requirements

- [Node.JS](https://nodejs.org)

## Configuration

you must set your baseURL in the `.env` files in the folder `./config/env`

## Commands

### Install dependencies

#### Node dependencies:
```sh
npm install
```

#### playwright:
```sh
npx playwright install --with-deps
```

### Test execution

For a simple run on default environment

```sh
npm run test-e2e
```

For a run on specific environment

```sh
npm run test-e2e-ENV
```

For simple execution on UI mode

```sh
npm run test-ui
```

### How to view the Allure report

Download the artifact of GitHub Actions and extract

## Documentations

- [Playwright](https://playwright.dev/docs/intro)
- [Allure-Report](https://allurereport.org/docs/install)
- [Eslint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en)
