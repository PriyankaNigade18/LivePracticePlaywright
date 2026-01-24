
import {test,expect} from '@playwright/test'
import {selectBasedDropdown} from "./generic/Utility.js"

test("test amazon ",async({page})=>{

    await page.goto("https://www.amazon.com/");

    let dd=await page.locator("#searchDropdownBox");

    await dd.click();

   let loc="select#searchDropdownBox option";
    await selectBasedDropdown(page,loc,"Toys & Games",dd);

//     let allOptions=await page.locator("select#searchDropdownBox option").all();

//     console.log("Total Options: "+allOptions.length);

// for(let e of allOptions)
// {
//     console.log(await e.innerText());

//     if((await e.innerText()).includes("Toys & Games"))
//     {
//         await dd.selectOption("Toys & Games");
           
//         await page.waitForTimeout(1000);
//         break;
//     }
    

    
// }

    
await page.waitForTimeout(3000);
})

test("Test for Facebook dropdown",async({page})=>{

    await page.goto("https://www.facebook.com/");
    await page.getByTestId("open-registration-form-button").click();
    let dayDD=page.locator("#day");
    //await dayDD.click();
    let dayOptions="select[aria-label='Day'] option";
    await selectBasedDropdown(page,dayOptions,"27",dayDD);

    let monthDD=page.locator("#month");
    let monthOptions="select[aria-label='Month'] option";
    await selectBasedDropdown(page,monthOptions,"Dec",monthDD);

    
    await page.waitForTimeout(2000);

})

test.only("Test multiple options",async({page})=>{
await page.goto("https://react-select.com/home");

await page.locator("(//div[contains(@class,'select__value-container')])[2]").click();

  const allOptions = page.locator("//div[contains(@class,'select__option')]");

  const count = await allOptions.count();

  for (let i = 0; i < count; i++) {
    const option = allOptions.nth(i);
    const text = await option.innerText();

    if (text.includes("Red") || text.includes("Yellow")) {
      await option.click();
      break;
    }
  }

await page.waitForTimeout(2000);
})

