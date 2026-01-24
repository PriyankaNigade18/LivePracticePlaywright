import {test,expect} from "@playwright/test"
import { scrollDown,scrollUp } from "./generic/Utility";


test("Page scrolling",async({page})=>{

await page.goto("https://www.amazon.in/");

//scroll down upto the height of the page
//Function to be evaluated in the page context.
//await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
await scrollDown(page);

await page.waitForTimeout(2000);

//await page.evaluate(()=>window.scrollTo(document.body.scrollHeight,0));

await scrollUp(page);

await page.waitForTimeout(2000);
await page.locator("//span[contains(text(),'Curated products from Small Businesses')]").scrollIntoViewIfNeeded();


await page.waitForTimeout(2000);

})


