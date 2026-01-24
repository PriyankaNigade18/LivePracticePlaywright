
import {test,expect} from "@playwright/test"
import { log } from "console";


test("Handle alerts as per type",async({page})=>{

//add dialog listner which will run in background
page.on("dialog",async(dialog)=>{

    if(dialog.type().includes('alert'))
    {
        console.log("This is "+dialog.type()+" type alert");
        
        console.log("Alert message is: "+dialog.message());
        await dialog.accept();
    }else  if(dialog.type().includes('confirm'))
    {
         console.log("This is "+dialog.type()+" type alert");
        console.log("Alert message is: "+dialog.message());
        await dialog.dismiss();
    }else  if(dialog.type().includes('prompt'))
    {
         console.log("This is "+dialog.type()+" type alert");
        console.log("Alert message is: "+dialog.message());
        await dialog.accept("Hello");
    }

})



await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.getByText("Click for JS Alert").click();
console.log(await page.locator("#result").innerText());
await page.getByText("Click for JS Confirm").click();
console.log(await page.locator("#result").innerText());
await page.getByText("Click for JS Prompt").click();
console.log(await page.locator("#result").innerText());

await page.waitForTimeout(2000);
})

test("Authentication popup",async({page})=>{

    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    let text=await page.locator("//p").innerText();
    console.log(text);
    

})
test.only("Authentication popup2",async({browser})=>{

    let context=await browser.newContext({httpCredentials:{
        username:"admin",
        password:"admin"
    }})

    let page=await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    let text=await page.locator("//p").innerText();
    console.log(text);
    
await page.waitForTimeout(2000);
})