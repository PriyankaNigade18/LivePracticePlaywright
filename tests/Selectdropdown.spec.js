
import {test,expect} from "@playwright/test"
import { selectBasedDropdown,selectByValue,selectByLabel,selectByIndex,scrollDown} from "./generic/Utility" 

test("Test for select based dropdown",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form");

   await scrollDown(page);
    
    let ddEle=page.locator("#select-menu");
    await selectByValue(ddEle,'2');
    //get the selected value in console
    let value=await ddEle.inputValue();
    console.log("Value is:"+ value);
    await expect(ddEle).toHaveValue(value);
    

    await page.waitForTimeout(2000);
})