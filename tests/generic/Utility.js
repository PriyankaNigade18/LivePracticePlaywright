
/**
 * 
 * @param {import("@playwright/test").Page} page 
 * @param {String} ddoptionsLoc 
 * @param {String} value 
 * @param {import("@playwright/test").Locator} dd 
 */
export async function selectBasedDropdown(page,alloptionsLoc,value,dd)
{
    //click on dropdown
    await dd.click();
    //get all options
    let allOptions=await page.locator(alloptionsLoc).all();
    //calculate total options
    console.log("Total Options: "+allOptions.length);
    //Iterating all options
    for(let e of allOptions)
    {
    console.log(await e.innerText());
        //select option
    if((await e.innerText()).includes(value))
    {
        await dd.selectOption(value);
        await page.waitForTimeout(1000);
        break;
    }
    
    }
}

/**
 * 
 * 
 * @param {import("@playwright/test").Locator} element 
 * @param {String} value 
 */
export async function selectByValue(element,value)
{
await element.selectOption(value);
}

/**
 * 
 * @param {import("@playwright/test").Locator} element 
 * @param {String} labelValue 
 */
export async function selectByLabel(element,labelValue)
{
    await element.selectOption({label:labelValue});
}

/**
 * 
 * @param {import("@playwright/test").Locator} element 
 * @param {Number} value 
 */
export async function selectByIndex(element,indexValue)
{
    await element.selectOption({index:indexValue});
}

/**
 * 
 * @param {import("@playwright/test").Page} page 
 */
export async function scrollDown(page)
{
    await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
}

/**
 * 
 * @param {import("@playwright/test").Page} page 
 */
export async function scrollUp(page)
{
    await page.evaluate(()=>window.scrollTo(document.body.scrollHeight,0));

}

/**
 * 
 * @param {import("@playwright/test").Page} page 
 * @param {String} element 
 */
export async function scrollToElement(page,element)
{
 await page.locator(element).scrollIntoViewIfNeeded();

}