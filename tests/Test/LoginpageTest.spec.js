import {test,expect} from "@playwright/test"
import {LoginPage} from "../../Pages/LoginPage.js"

test("Test valid login",async({page})=>{

    const loginPage=new LoginPage(page);
    await loginPage.getLoginPage();
    await loginPage.doLogin("Admin","admin123");
    await expect(page).toHaveURL(/dashboard/);
    await page.waitForTimeout(3000);


})

test("Test for invalid login",async({page})=>{

    const loginPage=new LoginPage(page);
    await loginPage.getLoginPage();
    await loginPage.doLogin("tester","tester123");
    const message=await loginPage.getInvalidLoginMessage();
    console.log("Invalid login message is: "+message);
    expect(message).toContain("Invalid credentials");
    
    await page.waitForTimeout(3000);
})