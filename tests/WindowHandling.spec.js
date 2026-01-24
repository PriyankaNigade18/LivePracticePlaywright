import {test,expect} from "@playwright/test";

test("New window handling",async({browser})=>
{
    let context=await browser.newContext();
let page=await context.newPage();

   await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

   await page.locator("#PopUp").scrollIntoViewIfNeeded();

   //await page.waitForEvent('popup');
   await page.locator("#PopUp").click();


    let allPages=context.pages();
    console.log("Total open windows: "+allPages.length);
    

    await page.waitForTimeout(2000);
    
})


    