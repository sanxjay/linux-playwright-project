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

---

**To add this to your project:**

1.  Open VS Code.
2.  In the Explorer, right-click in the root of your `my-playwright-project` folder and select "New File...".
3.  Type `README.md` and press Enter.
4.  Paste the content above into the new file.
5.  Save the file (`Ctrl + S`).

Then, commit and push this new `README.md` file to your `main` branch:

1.  Open your Terminal (and `cd` into `my-playwright-project` if you're not already there).
2.  Ensure you're on `main`:
    ```
    bash
    git checkout main
    git pull origin main # Sync with GitHub
    ```
3.  Add the new README:
    ```
    bash
    git add README.md
    ```
4.  Commit it:
    ```
    bash
    git commit -m "docs: Add simple README file"
    ```
5.  Push to GitHub:
    ```
    bash
    git push origin main
    ```

Once pushed, this concise `README.md` will be displayed on your GitHub repository's main page.
