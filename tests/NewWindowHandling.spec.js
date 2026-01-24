
import {test,expect} from "@playwright/test";
import { scrollToElement } from "./generic/Utility";

test("For new window handing",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");    
    await scrollToElement(page,"//button[text()='Click Me']");

    const [newPage]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//button[text()='Click Me']").click()
    ]);         
    await newPage.waitForLoadState();
    console.log("New page title is: "+await newPage.title());
    console.log("New page url is: "+newPage.url());
    await newPage.locator("//a[text()='Selenium']").click();
    await newPage.waitForLoadState();
    console.log("After clicking selenium link new page url is: "+newPage.url());            
    await newPage.close();

    console.log("Back to parent page");
    console.log("Parent page title is: "+await page.title());
    console.log("Parent page url is: "+page.url());
    await page.waitForTimeout(2000);
})

test("For new tab handling",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await scrollToElement(page,"//a[text()='Click Here for Google']");
    const [newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[text()='Click Here for Google']").click()
    ]);
    await newTab.waitForLoadState();
    console.log("New tab title is: "+await newTab.title());
    console.log("New tab url is: "+newTab.url());
    await newTab.locator("//input[@name='q']").fill("Playwright Automation");
    await newTab.waitForTimeout(2000);
    await newTab.close();

    console.log("Back to parent page");     
    console.log("Parent page title is: "+await page.title());
    console.log("Parent page url is: "+page.url());
    await page.waitForTimeout(2000);
}   )

    const [newPage]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//button[text()='Load Data']").click()
    ]);
    await newPage.waitForLoadState();
    console.log("New page title is: "+await newPage.title());       
    console.log("New page url is: "+newPage.url());
    await newPage.locator("//button[text()='Get New User']").click();
    await newPage.waitForTimeout(2000);

    let name=await newPage.locator("//div[@id='name']").innerText();
    let email=await newPage.locator("//div[@id='email']").innerText();
    console.log("Name: "+name);
    console.log("Email: "+email);
    await newPage.close();

    console.log("Back to parent page");     
    console.log("Parent page title is: "+await page.title());
    console.log("Parent page url is: "+page.url());
    await page.waitForTimeout(2000);    
})
test("For multiple window handling",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");    
    await scrollToElement(page,"//button[text()='Open Multiple Windows']");     
    const [newPage1,newPage2]=await Promise.all([
        page.waitForEvent('popup'),
        page.waitForEvent('popup'),
        page.locator("//button[text()='Open Multiple Windows']").click()
    ]);
    let pages=[newPage1,newPage2];  
    for(let pg of pages)
    {
        await pg.waitForLoadState();
        console.log("New page title is: "+await pg.title());
        console.log("New page url is: "+pg.url());
        if((await pg.title()).includes("Google"))
        {
            await pg.locator("//input[@name='q']").fill("Playwright Multiple Window Handling");
            await pg.waitForTimeout(2000);
        }
        else if((await pg.title()).includes("Yahoo"))
        {
            await pg.locator("//input[@name='p']").fill("Playwright Multiple Window Handling");
            await pg.waitForTimeout(2000);  
        }
        else if((await pg.title()).includes("Bing"))
        {
            await pg.locator("//input[@name='q']").fill("Playwright Multiple Window Handling");
            await pg.waitForTimeout(2000);  
        }
        await pg.close();
    }
    console.log("Back to parent page");     
    console.log("Parent page title is: "+await page.title());
    console.log("Parent page url is: "+page.url());
    await page.waitForTimeout(2000);    
})

test("For window handling based on title",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");    
    await scrollToElement(page,"//button[text()='Open Multiple Windows']"); 
    const [newPage1,newPage2]=await Promise.all([
        page.waitForEvent('popup'),
        page.waitForEvent('popup'),
        page.locator("//button[text()='Open Multiple Windows']").click()
    ]);
    let pages=[newPage1,newPage2];
    for(let pg of pages)
    {
        await pg.waitForLoadState();
        console.log("New page title is: "+await pg.title());
        console.log("New page url is: "+pg.url());
        if((await pg.title()).includes("Google"))
        {
            await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on Title");
            await pg.waitForTimeout(2000);
        }
        else if((await pg.title()).includes("Yahoo"))
        {
            await pg.locator("//input[@name='p']").fill("Playwright Window Handling based on Title");
            await pg.waitForTimeout(2000);  
        }
        else if((await pg.title()).includes("Bing"))
        {
            await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on Title");
            await pg.waitForTimeout(2000);  
        }   
        await pg.close();
              if((await pg.title()).includes("Yahoo"))
                {
                    await pg.locator("//input[@name='p']").fill("Playwright Window Handling based on Title");
                    await pg.waitForTimeout(2000);
                }
                else if((await pg.title()).includes("Bing"))
                   {
                    await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on Title");
                    await pg.waitForTimeout(2000);
                     }  
                else if((await pg.title()).includes("Google"))
                   {
                    await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on Title");
                    await pg.waitForTimeout(2000);
                   }    
                else
                   {
                    console.log("No matching title found");
                     }
              await pg.close();
              }
                else if((await pg.title()).includes("Bing"))
                     {
                        await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on Title");
                        await pg.waitForTimeout(2000);  
                     }
                else if((await pg.title()).includes("Google"))
                   {
                    await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on Title");
                    await pg.waitForTimeout(2000);
                   }
        await pg.close();
    }       
    console.log("Back to parent page");     
    console.log("Parent page title is: "+await page.title());
    console.log("Parent page url is: "+page.url());
    await page.waitForTimeout(2000);    
})
test("For window handling based on url",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");    
    await scrollToElement(page,"//button[text()='Open Multiple Windows']"); 
    const [newPage1,newPage2]=await Promise.all([
        page.waitForEvent('popup'),
        page.waitForEvent('popup'),
        page.locator("//button[text()='Open Multiple Windows']").click()
    ]);
    let pages=[newPage1,newPage2];  
    for(let pg of pages)
    {
        await pg.waitForLoadState();
        console.log("New page title is: "+await pg.title());
        console.log("New page url is: "+pg.url());
        if((pg.url()).includes("google"))
        {
            await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on URL");
            await pg.waitForTimeout(2000);
        }
        else if((pg.url()).includes("yahoo"))
        {
            await pg.locator("//input[@name='p']").fill("Playwright Window Handling based on URL");
            await pg.waitForTimeout(2000);  
        }
        else if((pg.url()).includes("bing"))
        {
            await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on URL");
            await pg.waitForTimeout(2000);  
        }   
        await pg.close();
        if((pg.url()).includes("yahoo"))
                {
                    await pg.locator("//input[@name='p']").fill("Playwright Window Handling based on URL");
                    await pg.waitForTimeout(2000);
                }
                else if((pg.url()).includes("bing"))
                   {
                    await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on URL");
                    await pg.waitForTimeout(2000);
                     }
                else if((pg.url()).includes("google"))
                   {
                    await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on URL");
                    await pg.waitForTimeout(2000);
                   }        
                else
                   {
                    console.log("No matching url found");
                     }
                await pg.close();
                if((pg.url()).includes("bing"))
                        {
                            await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on URL");
                            await pg.waitForTimeout(2000);  
                        }       
                else if((pg.url()).includes("google"))
                   {
                    await pg.locator("//input[@name='q']").fill("Playwright Window Handling based on URL");
                    await pg.waitForTimeout(2000);
                   }
        await pg.close();
    }       
    console.log("Back to parent page");     
    console.log("Parent page title is: "+await page.title());
    console.log("Parent page url is: "+page.url());
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














