## My Playwright E2E Tests

This repository contains **End-to-End (E2E) tests** for web applications, built using the Playwright framework.

## What's Inside

* **Playwright Test Files:** Located in the `tests/` directory.
* **Automated Testing:** Tests run automatically on every Pull Request using GitHub Actions.

## How to Run Tests Locally

To run these tests on your machine:

1.  **Install dependencies:**
    ```
    bash
    npm install
    npx playwright install --with-deps
    ```
2.  **Run tests:**
    ```
    bash
    npx playwright test
    ```