import {test,expect} from "@playwright/test"
import fs from "fs"
import Papa from "papaparse"

function readCsv(filePath)
{
const data=fs.readFileSync(filePath,"utf-8");
//header:If true, the first row of parsed data will be interpreted as field names.
//If true, lines that are completely empty (those which evaluate to an empty string) will be skipped.
//If true, numeric and boolean data will be converted to their type instead of remaining strings. 
const parseData=Papa.parse(data,{header:true,skipEmptyLines:true,dynamicTyping:false})
return parseData.data;
}

//call
const testData=readCsv("./data/mydata.csv");

for(let data of testData)
{
test("Test login"+data.id,async({page})=>{

    await page.goto("https://automationplayground.com/crm/login.html");
    await page.locator("#email-id").fill(data.email);
    await page.locator("#password").fill(data.password);
    await page.locator("#submit-id").click();

    await expect(page).toHaveURL(/customers/)
})
}

