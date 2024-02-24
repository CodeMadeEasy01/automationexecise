import { expect } from "@playwright/test";

exports.HeaderPage = class HeaderPage {
  constructor(page) {
    this.page = page;
    this.signUpLogin = page.getByRole("link", { name: " Signup / Login" });
  }

  async clickOnsignUpLogin() {
    await this.signUpLogin.waitFor({ state: "visible" });
    await expect(this.signUpLogin).toBeVisible();
    await this.signUpLogin.click();
  }
};
