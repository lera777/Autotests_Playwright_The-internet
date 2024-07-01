const { test, expect } = require('@playwright/test');

test('Successful login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'tomsmith');
    await page.fill('input[name="password"]', 'SuperSecretPassword!');
    await page.click('button:has-text("Login")');
    await expect(page).toHaveURL('/secure');
  });