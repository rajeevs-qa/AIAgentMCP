import { test, expect } from '@playwright/test';

test('navigate to amazon.in and verify page', async ({ page }) => {
  // Navigate to Amazon India website
  await page.goto('https://amazon.in');

  // Verify the page title contains "Amazon"
  await expect(page).toHaveTitle(/Amazon/);

  // Verify the page URL is correct
  expect(page.url()).toContain('amazon.in');

  // Verify that the main content is loaded by checking for a visible element
  // Amazon usually has a logo or search bar
  const searchBox = page.locator('input[placeholder*="Search"]');
  await expect(searchBox).toBeVisible();

  // Pause to keep the browser open for inspection
  await page.pause();
});
