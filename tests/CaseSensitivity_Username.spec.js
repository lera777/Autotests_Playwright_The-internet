const { test, expect } = require('@playwright/test');

  test('Username case sensitivity', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'TOMsmith'); // Different case
    await page.fill('input[name="password"]', 'SuperSecretPassword!');
    await page.click('button:has-text("Login")');
    await expect(page.locator('.error')).toContainText('Your username is invalid!');
  });