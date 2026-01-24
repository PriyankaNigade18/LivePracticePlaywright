
import {test,expect} from "@playwright/test"
import fs from "fs"
import { json } from "stream/consumers"

type RegData={

    firstName:string,
    lastName:string,
    telephone:string,
    password:string,
   subscribeLetter:string//primitive string

}

let registrationData: RegData[]=JSON.parse(fs.readFileSync("./data/register.json","utf-8"));

for(let user of registrationData)
{
    test(`registeration test ${user.firstName} and ${user.lastName}`,async({page})=>{
        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
        await page.locator("#input-firstname").fill(user.firstName);
    await page.locator("#input-lastname").fill(user.lastName);
    let email=user.firstName+Date.now()+"@gmail.com";
    await page.locator("#input-email").fill(email);
    await page.locator("#input-telephone").fill(user.telephone);
    await page.locator("#input-password").fill(user.password);
    await page.locator("#input-confirm").fill(user.password);

    if(user.subscribeLetter === "Yes")
    {
        await page.getByLabel("Yes").click();
    }else{
                await page.getByLabel("No").click();

    }

    await page.locator("//input[@name='agree']").click();
    await page.locator("//input[@value='Continue']").click();
    
    })
}