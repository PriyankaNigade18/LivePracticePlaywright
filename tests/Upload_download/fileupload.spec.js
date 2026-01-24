
import {test,expect} from "@playwright/test"


test('Tets for file uplaod',async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type='submit']").click();

    await page.locator("//span[text()='Recruitment']").click();
    await page.locator("//button[normalize-space()='Add']").click();

    const file=page.waitForEvent('filechooser');
    await page.locator("//div[text()='Browse']").click();
    const fileuploader=await file;

    await fileuploader.setFiles("./tests/Files/Appiumsetup.txt")

    await page.waitForTimeout(3000);


})

test.only('file download',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download");
    const waitfordownload=page.waitForEvent('download');
    await page.locator("//a[text()='bb.txt']").click();
const fileChooser=await waitfordownload;

await fileChooser.saveAs("./download/"+fileChooser.suggestedFilename());

await page.waitForTimeout(2000);
})