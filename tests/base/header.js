import { expect } from "@playwright/test";

exports.HeaderPage = class HeaderPage {
  constructor(page) {
    this.page = page;
    this.signUpLogin = page.getByRole("link", { name: " Signup / Login" });
    this.logout = page.getByRole("link", {name:"Logout"})
    this.deleteAccount = page.getByRole("link", { name: " Delete Account" });
  }

  async clickOnsignUpLogin() {
    await this.signUpLogin.waitFor({ state: "visible" });
    await expect(this.signUpLogin).toBeVisible();
    await this.signUpLogin.click();
  }

  async clickOnDeleteAccount() {
    await this.deleteAccount.waitFor({ state: "visible" });
    await expect(this.deleteAccount).toBeVisible();
    await this.deleteAccount.click();
  }

  async clickOnLogout() {
    await this.logout.waitFor({ state: "visible" });
    await expect(this.logout).toBeVisible();
    await this.logout.click();
  }
};
