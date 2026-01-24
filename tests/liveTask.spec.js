
import {test,expect} from "@playwright/test"

test("Goibibo test",async({page})=>{

    await page.goto("https://www.goibibo.com/flights/");

    //close the popup
    await page.locator("//span[@class='logSprite icClose']").click();

    //click on search
    await page.locator("//a[contains(@class,'primaryBtn')]").click();

    await page.waitForTimeout(1000);
    //new popup click on gotit
    await page.locator("//div[@class='fliCompCoachmark']/span[@data-testid='coachmark-overlay-button']").click();

    let totalSearchRes=await page.locator("//div//div[@data-test='component-clusterItem']").all();
    console.log("Total Search result: "+totalSearchRes.length);

    //total fare and sort it in ascending order
    let stringFare=await page.locator("//div[@data-test='component-fare']//span").allInnerTexts();
    console.log(stringFare);
    console.log(stringFare.length);
    
    
    let allFare=[];
    for(let i=0;i<stringFare;i++)
    {
        let val=stringFare[i].split(" ")[1];
        let data=Number(val)
        allFare.push(data);
    }

    console.log(allFare);
    console.log(allFare.length);
    
    

    //convert into number and print lowest and higest
    await page.waitForTimeout(2000);
})