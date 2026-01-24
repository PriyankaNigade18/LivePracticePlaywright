
import {test,expect} from "@playwright/test"

test("Test for keyboard",async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    
    let textToPaste="standard_user";
    await page.locator("#user-name").focus();
    await page.keyboard.insertText(textToPaste);
     await page.locator("#user-name").press("ControlOrMeta+A");
    await page.locator("#user-name").press("ControlOrMeta+C");
    await page.locator("#password").press("ControlOrMeta+V");

    await page.waitForTimeout(2000);

})