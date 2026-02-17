import { test, expect } from '@playwright/test';

test('health: page title contains Example', async ({ page }) => {
  await page.goto('https://example.com/');
  await expect(page).toHaveTitle(/Example Domain/);
});

