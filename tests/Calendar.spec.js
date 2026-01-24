
import {test,expect} from "@playwright/test"


test("Test for calendar",async({page})=>{

await page.goto("https://www.redbus.in/");

//click on date
await page.locator("//i[contains(@class,'on-date_range')]").click();

//expectation
let month="April";
let year="2026";
let date="6";
//month selection
while(true)
{
let dateText=await page.locator("//p[contains(@class,'monthYear')]").innerText();
let currentMonth=dateText.split(" ")[0];
let currentYear=dateText.split(" ")[1];
if(currentMonth.includes(month) && currentYear.includes(year))
{
    break;
}else{
    await page.locator("//i[contains(@aria-label,'Next month')]").click();

}

}
//date selection
let total=await page.locator("//li//div[contains(@class,'date')]//span").all();
for(let d of total)
{
    if((await d.innerText()).includes(date))
    {
        d.click();
        break;
    }
}

await page.waitForTimeout(2000);

})