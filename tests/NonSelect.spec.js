
import {test,expect} from "@playwright/test"

test("Test for Non select based dropdown",async({page})=>{

    await page.goto("https://www.redbus.in/");

    //await page.getByLabel("From").click();

    await page.locator("#srcinput").fill("pune");
await page.waitForTimeout(1000);
    //await page.waitForSelector("//div[contains(@class,'searchCategory')][1]//div[contains(@class,'listItem')]//div[@role='heading']");
    let allOptions=await page.locator("//div[contains(@class,'searchCategory')][1]//div[contains(@class,'listItem')]//div[@role='heading']").all();
   await page.waitForTimeout(1000);

    for(let i of allOptions)
    {
        console.log(await i.innerText());
        
    }


    await page.waitForTimeout(2000);
    
})