
import {test,expect, chromium} from "@playwright/test"

test("test with browser",async()=>{

    let browser=await chromium.launch({headless:false,channel:"chrome"});

    //Creates a new browser context. It won't share cookies/cache with other browser contexts.
    let context1=await browser.newContext();

    //new page
    let page=await context1.newPage();
    await page.goto("https://www.google.com");

    //newtab
    let page2=await context1.newPage();
    await page2.goto("https://www.facebook.com");

    await page.waitForTimeout(3000);

})

test("test with context",async({context})=>{

    let page=await context.newPage();
    await page.goto("https://www.google.com");

    await page.waitForTimeout(2000);
})

test.only("test for page",async({page})=>{

    await page.goto("https://www.google.com");
    await page.waitForTimeout(2000);
})

