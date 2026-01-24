
import {test,expect} from "@playwright/test"

test("New window handing",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(await page.title());
    
    let [newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[contains(@href,'linkedin')]").click()
    ])

    await page.waitForTimeout(1000);
    console.log(await newTab.title());

    let [newTab2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[contains(@href,'facebook')]").click()
    ])

    await page.waitForTimeout(1000);
    console.log(await newTab2.title());

    
    //come to main page
    await page.bringToFront();
    await page.waitForTimeout(1000);

    await page.locator("input[name='username']").fill("admin");

    await page.waitForTimeout(2000);
})