import {test,expect} from "@playwright/test"

test("Test Xpath axies",async({page})=>{
await page.goto("https://automationplayground.com/crm/customers.html?email-name=sdasdsd%40gmail.com&password-name=jhkj&submit-name=");

//ancestor
await page.locator("//td[text()='John']//ancestor::tbody").highlight();

await page.waitForTimeout(1000);

await page.locator("//td[text()='John']//parent::tr").highlight();

await page.waitForTimeout(1000);

await page.locator("//td[text()='John']//following::tr").highlight();



await page.waitForTimeout(2000);
})