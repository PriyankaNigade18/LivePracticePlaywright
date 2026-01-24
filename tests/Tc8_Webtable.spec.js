import {test,expect} from "@playwright/test"
import { scrollToElement } from "./generic/Utility";

test("Test for static table",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.locator("//h2[text()='Static Web Table']").scrollIntoViewIfNeeded();

    console.log("-----Testing Headers----");
    
    let headers=await page.locator("//table[@name='BookTable']//tbody//tr//th").all();
    console.log("Total Headers are: "+headers.length);

    for(let header of headers)
    {
        console.log(await header.innerText());
        
    }

    console.log('----Testing specific Row-----');
    
    let specRow=await page.locator("//table[@name='BookTable']//tbody//tr[5]//td").allInnerTexts();

    for(let r of specRow)
    {
        console.log(r+" ");
        
    }

    await page.waitForTimeout(2000);

    console.log("------specific columns------------");
    let subjects=await page.locator("//table[@name='BookTable']//tbody//tr//td[3]").allInnerTexts();
    for(let s of subjects)
    {
        console.log(subjects);
        
    }

    console.log("---------price------------");
    let allPrice=await page.locator("//table[@name='BookTable']//tbody//tr//td[4]").allInnerTexts();

    let total=0;
    for(let p of allPrice)
    {
        let price=Number(p);
        total=total+price;
    }

    console.log("Total books price is: "+total);
    
    
})


test("Test Dynamic table",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    let element="//h2[text()='Dynamic Web Table']";

  await scrollToElement(page,element);

  console.log("------Headings-------");
  
  let headings=await page.locator("//table[@id='taskTable']//thead//tr//th").allInnerTexts();
  for(let h of headings)
    {
        console.log(h);
        
    }  

    console.log("------specific row-----");
    
    for(let h of headings)
    {
        let cellCount=0;
        if(h.includes("Name"))
        {
            cellCount++;
            console.log("Name found at column number : "+cellCount);
            //all rows we will iterate
            let allData=await page.locator("//table[@id='taskTable']//tbody//tr//td["+cellCount+"]").allInnerTexts();
            //get the row count
            let row=0;
            for(let d of allData)
            {
                row++;
                if(d.includes("Chrome"))
                {
                    console.log("Chrome found at row: "+row);
                    let rowData=await page.locator("//table[@id='taskTable']//tbody//tr["+row+"]//td").allInnerTexts();
                    for(let a of rowData)
                    {
                        console.log(a);
                        
                    }
                }
            }
        }

        await page.waitForTimeout(2000);
    }



    console.log("-----specific cell----------");

    let c=0;
    for(let h of headings)
    {
        c++;
        if(h.includes('CPU (%)'))
        {
            console.log("Heading found at cell: "+c);

            let data=await page.locator("//table[@id='taskTable']//tr//td["+c+"]").allInnerTexts();
            
            for(let d of data)
            {
                console.log(d);
                
            }
        }


    }

console.log("----------CPU load of Chrome process: 3.7%------------");

for(let h of headings)
    {
        let cellCount=0;
        if(h.includes("Name"))
        {
            cellCount++;
            console.log("Name found at column number : "+cellCount);
            //all rows we will iterate
            let allData=await page.locator("//table[@id='taskTable']//tbody//tr//td["+cellCount+"]").allInnerTexts();
            //get the row count
            let row=0;
            for(let d of allData)
            {
                row++;
                if(d.includes("Chrome"))
                {
                    console.log("Chrome found at row: "+row);
                    let actData=await page.locator("//table[@id='taskTable']//tbody//tr["+row+"]//following-sibling::td[contains(text(),'%')]").innerText();
                    let exp=await page.locator("//strong[@class='chrome-cpu']").innerText();
                    if(actData.includes(exp))
                    {
                        console.log('CPU load matched....');
                        
                    }
                   }
           }

        }
    }

  await page.waitForTimeout(2000);  

})


test.only("Automate pagination",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");


    let pgno=0;
    while(true)
    {
        pgno++;
        let isEleExist=await page.locator("//td[text()='Tracker']").isVisible();
        if(isEleExist)
        {
            console.log("Element found!...at pageno: "+pgno);
            break;
        }

        //click on next page
        let pg=page.locator("//ul[@id='pagination']//li//a").nth(pgno)
        await pg.click();
        if((await pg.innerText()).includes("4"))
        {
            console.log("Pagination over....");
            break;
            
        }


    }
//     let element="//h2[text()='Pagination Web Table']";

//   await scrollToElement(page,element);


//   let pages=await page.locator("//ul[@id='pagination']//li//a").all();
//   for(let p of pages)
//   {
//     if((await p.innerText()).includes("2"))
//     {
//        await  p.click();
//        let pname=await page.locator("//table[@id='productTable']//tr//td[2]").allInnerTexts();
//        if(pname.includes('Gaming Console'))
//        {
//         await page.locator("//table[@id='productTable']//tr//td[text()='Gaming Console']//following-sibling::td//input").click();
//         break;
//        }
//     }
//   }

  await page.waitForTimeout(2000);
})


test("Pegination for Selectorshub",async({page})=>{

    await page.goto("https://selectorshub.com/xpath-practice-page/");

    let pageno=0;
    while(true)
    {
        pageno++;
        let isEleExit=await page.locator("//td[text()='Hong Kong']").isVisible();
        if(isEleExit)
        {
            console.log("Element Found! at pagenumber:"+pageno);
            break;
            
        }
    //click on next
    let next=page.locator("//button[contains(@class,'next')]");
    await next.click();


    }



})