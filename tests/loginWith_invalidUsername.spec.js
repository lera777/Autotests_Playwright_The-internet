const { test, expect } = require('@playwright/test');

test('Error message with invalid username and valid password', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'invalidUsername');
    await page.fill('input[name="password"]', 'SuperSecretPassword!');
    await page.click('button:has-text("Login")');
    await expect(page.locator('.error')).toContainText('Your username is invalid!');
  });