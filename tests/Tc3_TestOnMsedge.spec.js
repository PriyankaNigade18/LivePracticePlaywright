
import {test,expect, chromium} from "@playwright/test"

test("Test on MicrosoftEdge",async ()=>{

    //this return Browser instance
//let browser=await chromium.launch({headless:false,channel:"msedge"});
let browser=await chromium.launch({headless:false,channel:"chrome"});
//this return new page instance
let page=await browser.newPage();

await page.goto("https://www.google.com");

await page.waitForTimeout(2000);


})