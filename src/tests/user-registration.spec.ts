import { test, expect } from '@playwright/test';

test('Register new user', async ({ page }) => {
  // Navigate to the signup page
  await page.goto('https://www.automationexercise.com/login');
  
  // Enter signup information
  await page.getByRole('textbox', { name: 'Name' }).fill('Oana');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('oana.talos@evozon.com');
  await page.getByRole('button', { name: 'Signup' }).click();

  // Fill account information
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Password123!');

  // Fill address information
  await page.getByRole('textbox', { name: 'First name *' }).fill('Oana');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('Talos');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.O. Box, Company name, etc.)' }).fill('123 Test Street');

  // Select country
  await page.locator('#country').selectOption('United States');

  // Fill location details
  await page.getByRole('textbox', { name: 'State *' }).fill('NY');
  await page.getByRole('textbox', { name: 'City *' }).fill('New York');
  await page.locator('#zipcode').fill('10001');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('+123456789');

  // Create account
  await page.getByRole('button', { name: 'Create Account' }).click();

  // Verify account creation
  await expect(page).toHaveURL('https://www.automationexercise.com/account_created');
  await expect(page.getByText('Account Created!')).toBeVisible();
  await expect(page.getByText('Congratulations! Your new account has been successfully created!')).toBeVisible();
});
