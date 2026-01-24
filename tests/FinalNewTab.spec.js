
import {test,expect} from '@playwright/test';

test("Test new Tab automation",async({page})=>
{
    await page.goto("https://www.orangehrm.com/en/contact-sales");

    //close the cookie
    await page.locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click();
    
    //click on this link open new tab
    //await page.locator("//a[contains(@href,'linkedin')]").click();
    //to handle new tab add promise.all()
    let [newTab]=await Promise.all([
      //wait for event
      page.waitForEvent('popup'),
      page.locator("//a[contains(@href,'linkedin')]").click()
    ]);

    await page.waitForTimeout(1000);
    let newTabTitle=await newTab.title();
    console.log(newTabTitle);
    
    //close child window
    await newTab.close();

    await page.waitForTimeout(1000);
    //Brings page to front (activates tab).
    await page.bringToFront();
    console.log("Parent page title: "+await page.title());
    
    
await page.waitForTimeout(2000);

})