const { expect } = require("@playwright/test");

exports.SignUpLoginPage = class SignUpLoginPage {
  constructor(page) {
    this.page = page;
    this.newUserHeader = page.getByRole("header", { name: "New User Signup!" });
    this.name = page.getByPlaceholder("Name");
    this.email = page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");
    this.signUpButton = page.getByRole("button", { name: "Signup" });
  }

  async enterName(name) {
    await this.name.waitFor({ state: "visible" });
    await expect(this.name).toBeVisible();
    await this.name.fill(name);
  }

  async enterEmail(email) {
    await this.email.waitFor({ state: "visible" });
    await expect(this.email).toBeVisible();
    await this.email.fill(email);
  }

  async clickSignUp() {
    await this.signUpButton.waitFor({ state: "visible" });
    await expect(this.signUpButton).toBeVisible();
    await this.signUpButton.click();
  }
};
