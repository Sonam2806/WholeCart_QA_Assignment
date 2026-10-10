const { test, expect } = require('@playwright/test');
const USER = process.env.QA_USER || 'buyer1';
const PASSWORD = process.env.QA_PASSWORD || 'Test@123';
let token;
test.beforeAll(async ({ request }) => {
  const response = await request.post('api/login', { data: { username: USER, password: PASSWORD } });
  expect(response.ok(), `Login returned ${response.status()}`).toBeTruthy();
  const body = await response.json();
  token = body.token || body.access_token || body.accessToken;
  expect(token, 'Check login token field in Swagger if this fails').toBeTruthy();
});
const auth = () => ({ Authorization: `Bearer ${token}` });
test('login rejects invalid credentials', async ({ request }) => {
  const response = await request.post('api/login', { data: { username: USER, password: 'wrong-password' } });
  expect([400, 401, 403]).toContain(response.status());
});
test('authenticated user profile is available', async ({ request }) => {
  const response = await request.get('api/me', { headers: auth() });
  expect(response.ok()).toBeTruthy();
});
test('catalogue categories are returned', async ({ request }) => {
  const response = await request.get('api/categories', { headers: auth() });
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();
});
test('products endpoint returns data', async ({ request }) => {
  const response = await request.get('api/products', { headers: auth() });
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();
});
test('buyer can retrieve cart', async ({ request }) => {
  const response = await request.get('api/cart', { headers: auth() });
  expect(response.ok()).toBeTruthy();
});
test('unauthenticated profile access is blocked', async ({ request }) => {
  const response = await request.get('api/me');
  expect([401, 403]).toContain(response.status());
});
