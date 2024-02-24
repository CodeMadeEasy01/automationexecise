import { expect, test } from "@playwright/test";
import { HeaderPage } from "./base/header";
import { HomePage } from "./pages/homePage";
import { SignUpLoginPage } from "./pages/signUpLogin";
import { SignUpInfoPage } from "./pages/signUpInfo";

test("Register User", async ({ page }) => {
  const Header = new HeaderPage(page);
  const Home = new HomePage(page);
  const SignUpLogin = new SignUpLoginPage(page);
  const SignUpInfo = new SignUpInfoPage(page);

  await Home.goToHomePage();
  await Header.clickOnsignUpLogin();
  await page
    .getByRole("heading", { name: "New User Signup!" })
    .waitFor({ state: "visible" });
  await expect(
    page.getByRole("heading", { name: "New User Signup!" })
  ).toBeVisible();
  await SignUpLogin.enterName("test");
  await SignUpLogin.enterEmail("test555577772@test.com");
  await SignUpLogin.clickSignUp();
  await page.waitForTimeout(1000);
  await page
    .getByText("Enter Account Information")
    .waitFor({ state: "visible" });
  await expect(page.getByText("Enter Account Information")).toBeVisible();
  await SignUpInfo.verifyName("test");
  await SignUpInfo.verifyEmail("test555577772@test.com");
  await SignUpInfo.fillPassword("TestPassword1234");
  await SignUpInfo.selectDay("17");
  await page.waitForTimeout(1000);
  await SignUpInfo.selectMonth("January");
  await page.waitForTimeout(1000);
  await SignUpInfo.selectYear("1997");
  await SignUpInfo.checkNewsLetter();
  await SignUpInfo.checkOffers();
  await SignUpInfo.fillFirstName("test Name");
  await SignUpInfo.fillLastName("test last Name");
  await page.waitForTimeout(1000);
  await SignUpInfo.fillCompany("test company");
  await SignUpInfo.fillAdress("Test adress");
  await SignUpInfo.fillSecondAdress("Test second adress");
  await SignUpInfo.selectCountry("Canada");
  await SignUpInfo.selectState("State test");
  await SignUpInfo.selectCity("Test City");
  await SignUpInfo.selectZipCode("10000");
  await SignUpInfo.selectMobileNumber("000004");
  await SignUpInfo.clickOnCreateAccount();
  await page.waitForTimeout(1000);
  await page.getByText("Account Created!").waitFor({ state: "visible" });
  await expect(page.getByText("Account Created!")).toBeVisible();
  await page.waitForTimeout(10000);
});
