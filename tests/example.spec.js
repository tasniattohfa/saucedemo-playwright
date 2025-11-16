const { test, expect } = require('@playwright/test');

test('User logs in, adds product, verifies cart and logs out', async ({ page }) => {
  
  // index
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // add prod
  const firstProduct = page.locator('.inventory_item').first();
  const productName = await firstProduct.locator('.inventory_item_name').innerText();
  await firstProduct.locator('button.btn_inventory').click();

  // open cart
  await page.click('[data-test="shopping-cart-link"]');

  // verify prod
  const cartItemName = await page.locator('.cart_item .inventory_item_name').innerText();
  expect(cartItemName.trim()).toBe(productName.trim());

  // logout
  await page.click('#react-burger-menu-btn');
  await page.click('[data-test="logout-sidebar-link"]');

  // verify login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
});
