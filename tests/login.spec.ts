import { test, expect } from '@playwright/test';
import { LOGIN_EMAIL, LOGIN_PASSWORD, USER_NAME } from './login-data';

test('login user', async ({ page }) => {
  // Open site
  await page.goto('https://www.automationexercise.com/');

  // Go to login page
  await page.locator('a[href="/login"]').click();

  // Fill login form
  await page.locator('[data-qa="login-email"]').fill(LOGIN_EMAIL);
  await page.locator('[data-qa="login-password"]').fill(LOGIN_PASSWORD);
  await page.locator('[data-qa="login-button"]').click();

  // Verify user is logged in
  await expect(page.locator('header')).toContainText(`Logged in as ${USER_NAME}`);
});