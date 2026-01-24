
import {test,expect} from "@playwright/test"

test("test file upload",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.getByText("Upload Files").scrollIntoViewIfNeeded();

    //await page.locator("#singleFileInput").setInputFiles("./tests/Files/Appiumsetup.txt");

    await page.locator("#multipleFilesInput").setInputFiles(["./tests/Files/Appiumsetup.txt","./tests/Files/demoqa_code.txt"])
    await page.waitForTimeout(2000);
})
