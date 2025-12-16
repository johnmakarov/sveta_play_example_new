// import { test, expect } from './login.spec';
// import { EMAIL, PASSWORD } from './test-data';
// import {
//   ADDRESS,
//   NAME_ON_CARD,
//   CARD_NUMBER,
//   CVC,
//   EXPIRY_MONTH,
//   EXPIRY_YEAR
// } from './checkout-data';

// test('checkout product', async ({ page, createUserViaApi, deleteUserViaApi }) => {

//   await page.goto('/'); // если у тебя baseURL в config; иначе поставь полный URL

//   // Login
//   await page.locator('a[href="/login"]').click();
//   await page.locator('[data-qa="login-email"]').fill(EMAIL);
//   await page.locator('[data-qa="login-password"]').fill(PASSWORD);
//   await page.locator('[data-qa="login-button"]').click();

//   await expect(page.locator('header')).toContainText('Logged in as');

//   // Products
//   await page.locator('a[href="/products"]').click();
//   await expect(page.locator('h2')).toContainText('All Products');

//   // Add product to cart
//   await page.locator('.add-to-cart').first().click();
//   await page.locator('button:has-text("Continue Shopping")').click();

//   // Open cart
//   await page.locator('a[href="/view_cart"]').click();
//   await expect(page.locator('.breadcrumbs')).toContainText('Shopping Cart');

//   // Proceed to checkout
//   await page.locator('a:has-text("Proceed To Checkout")').click();

//   // Verify address
//   await expect(page.locator('#address_delivery')).toContainText(ADDRESS);

//   // Place order
//   await page.locator('a:has-text("Place Order")').click();

//   // Payment form
//   await page.locator('[data-qa="name-on-card"]').fill(NAME_ON_CARD);
//   await page.locator('[data-qa="card-number"]').fill(CARD_NUMBER);
//   await page.locator('[data-qa="cvc"]').fill(CVC);
//   await page.locator('[data-qa="expiry-month"]').fill(EXPIRY_MONTH);
//   await page.locator('[data-qa="expiry-year"]').fill(EXPIRY_YEAR);

//   // Pay and confirm
//   await page.locator('[data-qa="pay-button"]').click();

//   await expect(page.locator('[data-qa="order-placed"]')).toContainText('Order Placed!');
// });
