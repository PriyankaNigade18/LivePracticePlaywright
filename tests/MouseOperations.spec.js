import {test,expect} from "@playwright/test"
/*
MouseHover
RightClick
DoubleClick
DragTo
Tab Sequence
Scroll

*/
test("test for mousehover",async({page})=>{

    await page.goto("https://www.naukri.com/");
    await page.getByTitle("Search Jobs").hover();
    let allLinks=await page.locator("ul.nI-gNb-menus>li div[class*='nI-gNb-Jobs']>ul>li").allInnerTexts();

    for(let e of allLinks)
    {
        console.log(e);
        
    }

    await page.waitForTimeout(2000);
})

test("Rightclick Action",async({page})=>{



    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    page.on("dialog",async(dialog)=>{
console.log(dialog.message());
console.log(dialog.type());
await dialog.accept();

});
    await page.getByText("right click me").click({button:"right"});

    let allOptions=await page.locator("ul.context-menu-list>li span").all();
    for(let e of allOptions)
    {
        console.log(await e.innerText());
        if((await e.innerText()).includes("Copy"))
        {
            await e.click();
            break;
        }
        
    }
    //alert
    await page.waitForTimeout(1000);


    await page.waitForTimeout(2000);
})

test("Doubleclick Action",async({page})=>{

 page.on("dialog",async(dialog)=>{
console.log(dialog.message());
console.log(dialog.type());
await dialog.accept();

});

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");


    await page.getByText("Double-Click Me To See Alert").dblclick();

     //alert will open and handle by playwright   

})
   
test("Automate drag and drop",async({page})=>{

    await page.goto("https://jqueryui.com/droppable/");
    let f1=page.frameLocator("iframe");

    let src=f1.locator("#draggable");
    let target=f1.locator("#droppable");

    await src.dragTo(target);
    //await page.dragAndDrop(src,target);

    await page.waitForTimeout(2000);

})

test.only("Automate slider",async({page})=>{
await page.goto("https://jqueryui.com/slider/");

let f1=page.frameLocator("iframe");
let slider=f1.locator("span.ui-slider-handle");
let area=f1.locator("#slider");
await slider.hover();
await slider.dragTo(area,{targetPosition:{x:200,y:0}})

/*
// Get slider position
  const box = await slider.boundingBox();

  // Drag slider to the right
  await page.mouse.move(
    box.x + box.width / 2,
    box.y + box.height / 2
  );
  await page.mouse.down();
  await page.mouse.move(
    box.x + 200, // adjust this value to control slider position
    box.y + box.height / 2,
    { steps: 10 }
  );
  await page.mouse.up();
*/
await page.waitForTimeout(2000);
})

test("Test for tab sequence",async({page})=>{
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

await page.locator("#input-firstname").pressSequentially("Priyanka",{delay:200});
//press tab and then type in active box
await page.keyboard.press('Tab');
await page.keyboard.type("Nigade",{delay:200});
await page.keyboard.press('Tab');
await page.keyboard.type("ppp25@gmail.com",{delay:200});
await page.keyboard.press('Tab');
await page.keyboard.type("877665555",{delay:200});
await page.keyboard.press('Tab');
await page.keyboard.type("abcd",{delay:200});
await page.keyboard.press('Tab');
await page.keyboard.type("abcd",{delay:200});
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

})
