import { test, expect } from '@playwright/test';

test('navigate to amazon.in and verify page', async ({ page }) => {
  await page.goto('https://amazon.in', { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveTitle(/Amazon/i);
  expect(page.url()).toContain('amazon.in');

  const searchBox = page.locator('#twotabsearchtextbox').or(page.locator('input[placeholder*="Search"]'));
  await expect(searchBox.first()).toBeVisible({ timeout: 20000 });
});
