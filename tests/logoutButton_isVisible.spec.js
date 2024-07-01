const { test, expect } = require('@playwright/test');

test('The Logout button is visible on the Secure page', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'tomsmith');
    await page.fill('input[name="password"]', 'SuperSecretPassword!');
    page.click('button:has-text("Login")'); 
    const logoutButton = await page.locator('a.button.secondary.radius');
    await expect(logoutButton).toBeVisible();
  });