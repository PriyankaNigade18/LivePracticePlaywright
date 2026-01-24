import {expect} from "@playwright/test"
import { LoginPage} from "../../Pages/LoginPage.js"
import { DashboardPage} from "../../Pages/DashboardPage";
import {test} from "../../Fixtures/Login.fixture.js"


test.beforeEach("login",async({loggedInUser})=>{
// const loginPage=new LoginPage(page);
// await loginPage.getLoginPage();
// await loginPage.doLogin("Admin","admin123");
let page=loggedInUser;

})

test("Test for header",async({page})=>{

    const dashboardpage=new DashboardPage(page);
   const heading= await dashboardpage.getHeading();
    expect(heading).toContain("Dashboard");

    await page.waitForTimeout(2000);
})

test("Test for logout",async({page})=>{
 const dashboardpage=new DashboardPage(page);
 await dashboardpage.doLogout();
 await expect(page).toHaveURL(/login/);
 await page.waitForTimeout(3000);
})