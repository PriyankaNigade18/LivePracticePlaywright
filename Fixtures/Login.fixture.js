
import {test as base} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"

export const test=base.extend({
    loggedInUser:async({page},use)=>{
       const loginPage=new LoginPage(page);
       await loginPage.getLoginPage();
       await loginPage.doLogin("Admin","admin123");
       await use(page);
    }
})