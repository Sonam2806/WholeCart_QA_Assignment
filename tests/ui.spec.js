const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { CataloguePage } = require('../pages/CataloguePage');
const USER = process.env.QA_USER || 'buyer1';
const PASSWORD = process.env.QA_PASSWORD || 'Test@123';
test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(USER, PASSWORD);
  await expect(page).toHaveURL(/catalogue/);
});
test('buyer sees catalogue and can search a known product', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Catalogue' })).toBeVisible();
  const catalogue = new CataloguePage(page);
  await catalogue.search('Banana Chips');
  await expect(page.getByRole('link', { name: /Banana Chips/i }).first()).toBeVisible();
});
test('buyer can open product details', async ({ page }) => {
  const catalogue = new CataloguePage(page);
  await catalogue.search('Banana Chips');
  await catalogue.openProduct("Chef's Banana Chips");
  await expect(page.getByRole('heading', { name: "Chef's Banana Chips" })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
});
test('buyer can add a case to cart', async ({ page }) => {
  const catalogue = new CataloguePage(page);
  await catalogue.search('Banana Chips');
  await catalogue.openProduct("Chef's Banana Chips");
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page).toHaveURL(/cart/);
  await expect(page.getByText("Chef's Banana Chips")).toBeVisible();
  await expect(
  page.getByRole('link', { name: /checkout/i }).or(page.getByRole('button', { name: /checkout/i })).first()
).toBeVisible();
});
test('buyer sees checkout totals and delivery controls', async ({ page }) => {
  const catalogue = new CataloguePage(page);
  await catalogue.search('Banana Chips');
  await catalogue.openProduct("Chef's Banana Chips");
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: /checkout/i }).or(page.getByRole('button', { name: /checkout/i })).first().click();
  await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible();
  await expect(page.getByText('Grand total')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Show slots' })).toBeVisible();
});
