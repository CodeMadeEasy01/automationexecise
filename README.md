Install Playwright NuGet Package:
Make sure you have the Microsoft.Playwright.NUnit NuGet package installed in your C# project.

using Statements: Include necessary namespaces.

[TestFixture]: Marks the class as a container for tests.

PageTest: Inherit from PageTest provided by Playwright NUnit integration. This provides the Page object for interacting with the browser.

GenerateRandomString() and GenerateRandomEmail(): Helper methods to create random data for registration.

[Test] Attributes: Mark each method as a test case.

TestUserRegistrationFlow():

Navigates to the signup/login page.
Fills the new user signup form with random data.
Fills the account information and address details on the subsequent page.
Verifies the "Account Created!" message.
Handles a potential advertisement iframe using FrameLocator and a try-catch block with a timeout.
Verifies the "Logged in as" message.
Deletes the created account and verifies the "Account Deleted!" message.
TestProductSearchAndFiltering():

Navigates to the homepage and searches for "tshirts".
Verifies the "Searched Products" header and that results contain "t-shirt".
Applies Filters: This part assumes the presence of price range and brand filter elements. You'll need to inspect the actual website's structure to identify the correct locators (CSS selectors or XPath) for these filters (e.g., checkboxes, sliders, dropdowns). The provided code includes try-catch blocks in case the example filter locators are not found.
Verifies Filtered Results: It retrieves the names of the displayed products and asserts that they contain "tshirt". More specific assertions based on the applied price and brand filters would require extracting price and brand information from the product elements on the page.
TestShoppingCartFunctionality():

Navigates to the products page.
Adds the first two available products to the cart using the "Add to cart" buttons.
Navigates to the shopping cart.
Verifies the "Shopping Cart" header.
Updates Quantities: It gets the initial quantities, increases them, fills the input fields, and then verifies the updated quantities. It includes a Task.Delay() to allow time for the update to reflect, but a more robust approach might involve waiting for a specific element change.
Removes an Item: It clicks the delete button for the first item and verifies that the number of cart items has decreased.
Verifies Cart Totals: It iterates through the cart items, calculates the expected total based on quantity and price, and compares it with the displayed cart total. It also handles the case where the cart might be empty after removing the last item.
Before Running:

Install Playwright Browsers: You need to download the browsers that Playwright can use. You can do this by running the following command in your project's directory in the terminal:
Bash
pwsh bin/Debug/netX.X/playwright.ps1 install  # Replace netX.X with your .NET target framework
or if you have the Playwright CLI installed globally:
Bash
playwright install
Inspect Website Locators: Use your browser's developer tools (Inspect Element) to carefully examine the HTML structure of the Automation Exercise website and identify the correct CSS selectors or XPath expressions for the elements you need to interact with (buttons, input fields, checkboxes, labels, etc.). 
