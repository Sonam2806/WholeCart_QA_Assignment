class CataloguePage {
  constructor(page) { this.page = page; }
  async search(term) {
    await this.page.getByPlaceholder('Search name or SKU').fill(term);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }
  async openProduct(name) { await this.page.getByRole('link', { name, exact: true }).first().click(); }
}
module.exports = { CataloguePage };
