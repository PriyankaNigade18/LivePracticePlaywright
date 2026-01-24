
import {test,expect} from "@playwright/test"


test("test for autowait",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login",{waitUntil:"load"});

    //auto wait is applicable
    page.getByRole('heading',{name:"Returning Customer"});

    let emialId=page.locator("#input-email")
    await emialId.waitFor({timeout:12000});
    await emialId.fill("test2525@gmail.com");

    await page.locator("#input-password").fill("test123");
    await page.locator("//input[@value='Login']").click();

    //for navigation we can write wait for 
    await page.waitForURL(/account/,{timeout:10000});
    console.log("done!");
    
await page.waitForLoadState("load");




})

test.only("Test for dynamic loading",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/2");

    await page.getByRole("button",{name:"Start"}).click();

    page.locator("(//h4)[2]").waitFor({state:"visible",timeout:15000});
    await expect(page.locator("(//h4)[2]")).toHaveText("Hello World!",{timeout:12000});
})