
import {test,expect} from "@playwright/test"

test("Test for Google allpication ",async({page})=>{

    await page.goto("https://www.google.com");
    
})