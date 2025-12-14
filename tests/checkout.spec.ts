import { test, expect } from '@playwright/test';
import { LOGIN_EMAIL, LOGIN_PASSWORD } from './login-data';
import {
  ADDRESS,
  COUNTRY,
  STATE,
  CITY,
  ZIPCODE,
  MOBILE_NUMBER,
  NAME_ON_CARD,
  CARD_NUMBER,
  CVC,
  EXPIRY_MONTH,
  EXPIRY_YEAR
} from './checkout-data';

test('checkout product', async ({ page }) => {

  // 1. Open site
  await page.goto('https://www.automationexercise.com/');

  // 2. Login
  await page.locator('a[href="/login"]').click();
  await page.locator('[data-qa="login-email"]').fill(LOGIN_EMAIL);
  await page.locator('[data-qa="login-password"]').fill(LOGIN_PASSWORD);
  await page.locator('[data-qa="login-button"]').click();

  await expect(page.locator('header'))
    .toContainText('Logged in as');

  // 3. Go to products
  await page.locator('a[href="/products"]').click();
  await expect(page.locator('h2'))
    .toContainText('All Products');

  // 4. Add product to cart
  await page.locator('.add-to-cart').first().click();
  await page.locator('button:has-text("Continue Shopping")').click();

  // 5. Open cart
  await page.locator('a[href="/view_cart"]').click();
  await expect(page.locator('.breadcrumbs'))
    .toContainText('Shopping Cart');

  // 6. Proceed to checkout
  await page.locator('a:has-text("Proceed To Checkout")').click();

  // 7. Verify address
  await expect(page.locator('#address_delivery'))
    .toContainText(ADDRESS);

  // 8. Place order
  await page.locator('a:has-text("Place Order")').click();

  // 9. Fill payment form
  await page.locator('[data-qa="name-on-card"]').fill(NAME_ON_CARD);
  await page.locator('[data-qa="card-number"]').fill(CARD_NUMBER);
  await page.locator('[data-qa="cvc"]').fill(CVC);
  await page.locator('[data-qa="expiry-month"]').fill(EXPIRY_MONTH);
  await page.locator('[data-qa="expiry-year"]').fill(EXPIRY_YEAR);

  // 10. Pay and confirm
  await page.locator('[data-qa="pay-button"]').click();

  // 11. Verify success
  await expect(page.locator('[data-qa="order-placed"]'))
    .toContainText('Order Placed!');
});