const { test, expect } = require('@playwright/test');

test('Password field masking', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="password"]', 'SuperSecretPassword!');
    const passwordFieldType = await page.getAttribute('input[name="password"]', 'type');
    await expect(passwordFieldType).toBe('password');
  });