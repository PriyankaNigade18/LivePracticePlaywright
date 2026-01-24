import {test,expect} from "@playwright/test"

import XLSX from "xlsx"



function readExcel(excelFilePath,sheet)
{
    const wrokbook=XLSX.readFile(excelFilePath);
    const worksheet=wrokbook.Sheets[sheet];
    //if we dont add header then we will get array of object 
    //if we include header then we will get array of array
    const data=XLSX.utils.sheet_to_json(worksheet,{header:1})

    const users=[];
    //to skip heading start i=1
    for(let i=1;i<data.length;i++)
    {
        const cell=data[i];
        users.push({
            id:i+1,
            email:cell[0],
            password:cell[1]
        })
    }
    return users

}

const testData=readExcel("./data/TestData.xlsx","loginData");

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