// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('homepage has title and get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Harmless line just for test.
  console.log('Testing CI trigger');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('simple dummy test for CI trigger', async ({ page }) => {
  // This test simply goes to a common example website
  await page.goto('https://github.com/sanxjay');

  // And then asserts that the browser's title contains "GitHub"
  // This is a very basic check that doesn't rely on complex UI elements.
  await expect(page).toHaveTitle(/GitHub/);

  // You could also do a simpler assertion like this:
  // await expect(true).toBe(true); // This always passes and is truly just for a "dummy" change.
});
// --- END OF NEW TEST BLOCK ---

// Second test 
test('another dummy test for CI', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Example Domain'); // A slightly different assertion
});

