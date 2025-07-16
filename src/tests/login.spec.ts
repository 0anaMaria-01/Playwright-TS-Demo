import { test, expect } from '@playwright/test';

test('User login test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/login');

  //await page.getByRole('textbox', { name: 'Email Address' }).fill('oana.talos@evozon.com');
  //await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
  await page.locator('[data-qa="login-email"]').fill('oana.talos@evozon.com');
  await page.locator('[data-qa="login-password"]').fill('Password123!');
  await page.locator('[data-qa="login-button"]').click(); 
  await expect(page).toHaveURL('https://www.automationexercise.com/');
  await expect(page.getByText('Logged in as Oana')).toBeVisible();
});
