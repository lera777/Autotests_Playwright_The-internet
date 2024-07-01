const { test, expect } = require('@playwright/test');

test('Error message with valid username and empty password', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'tomsmith'); 
    await page.click('button:has-text("Login")');
    await expect(page.locator('.error')).toContainText('Your password is invalid!');
  });