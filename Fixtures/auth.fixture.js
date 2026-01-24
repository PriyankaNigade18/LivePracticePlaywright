
import {test as base} from "@playwright/test"

export const test=base.extend({
    loggedInUser: async({page},use)=>{
         await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    use(page);
    }
})