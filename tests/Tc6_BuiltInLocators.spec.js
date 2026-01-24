

import {test,expect} from "@playwright/test"


test("Tets for build in locators: ",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

    await page.getByTitle("Search").fill("Java");
    await page.waitForSelector("ul[role='listbox'] li");
    let allOptions=await page.locator("ul[role='listbox'] li").all();
    console.log("Total Options are: "+allOptions.length);

    for(let e of allOptions)
    {
        console.log(await e.innerText());
        
    }
    
    await page.waitForTimeout(2000);
})