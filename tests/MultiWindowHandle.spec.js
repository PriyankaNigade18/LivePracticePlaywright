
import {test,expect, chromium} from "@playwright/test"

test("Handle multiple windows",async({browser})=>{

    
     //let browser=await chromium.launch({headless:false,channel:'chrome'});
    //create newcontext from browser
    let context=await browser.newContext();
    //create new page
    let page=await context.newPage();

    await page.goto("https://www.orangehrm.com/en/contact-sales");

    let homePageTitle=await page.title();
    //close the cookie
    await page.locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click();
    
    //click on all child windows
    await page.locator("//a[contains(@href,'facebook')]").click();
    await page.locator("//a[contains(@href,'linkedin')]").click();
    await page.locator("//a[contains(@href,'youtube')]").click();

    await page.waitForTimeout(1000);
    //total windows open
    let totalPages=context.pages();
    console.log("Total Windows open: "+totalPages.length);

    for(let pg of totalPages)
    {
        console.log(await pg.title());
        //to close only child window
        if(await pg.title()!==homePageTitle)
        {
            await pg.close();
        }
        
    }

    await page.waitForTimeout(1000);
    //parent page
    //await page.bringToFront();


    
    

   await page.waitForTimeout(4000);


})