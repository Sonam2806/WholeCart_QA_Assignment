class LoginPage {
  constructor(page) { this.page = page; }
  async open() { await this.page.goto('login'); }
  async login(username, password) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }
}
module.exports = { LoginPage };
