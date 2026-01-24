
import {test,expect} from "@playwright/test"

import testData from "../../data/login.json"


for(let data of testData)
{
test("Test login"+data.id,async({page})=>{

    await page.goto("https://automationplayground.com/crm/login.html");
    await page.locator("#email-id").fill(data.email);
    await page.locator("#password").fill(data.password);
    await page.locator("#submit-id").click();

    await expect(page).toHaveURL(/customers/)
})
}

