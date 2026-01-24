import {test,expect} from "@playwright/test"

test("Element validation",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    let checkEnabled=await page.getByPlaceholder('Enabled/Disabled Field').isEnabled();
    let checkdisabled=await page.getByPlaceholder('Enabled/Disabled Field').isDisabled();
let checkEditable=await page.getByPlaceholder('Enabled/Disabled Field').isEditable();

console.log("Enabled?: "+checkEditable);
console.log("disabled?: "+checkdisabled);
console.log("editabled?: "+checkEditable);

    await page.getByPlaceholder('Enabled/Disabled Field').click();
await page.waitForTimeout(1000);
//click on disabled button
await page.locator("#disabled-button").click();

await page.waitForTimeout(1000);
//await page.getByPlaceholder('Enabled/Disabled Field').click();

let chEnabled=await page.getByPlaceholder('Enabled/Disabled Field').isEnabled();
    let chdisabled=await page.getByPlaceholder('Enabled/Disabled Field').isDisabled();
let chEditable=await page.getByPlaceholder('Enabled/Disabled Field').isEditable();
console.log("Enabled?: "+chEditable);
console.log("disabled?: "+chdisabled);
console.log("editabled?: "+chEditable);

await page.evaluate(()=>{
    document.querySelector("[id='enabled-example-input']").value = "Hello";
})

await page.waitForTimeout(1000);
//refresh
await page.evaluate(()=>{
    //window.history.go(0);
    window.location.reload();
})
await page.waitForTimeout(2000);





})

test.only('Test for element disable',async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/enabled");

    let status=await page.locator("#disabledInput").isDisabled();
    console.log("IsDisabled?:"+status);
    
    await page.evaluate(()=>{
        document.querySelector("[id='disabledInput']").value="Hello";
    })

    await page.waitForTimeout(2000);
})