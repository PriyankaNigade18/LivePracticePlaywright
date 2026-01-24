
import {test,expect} from "@playwright/test"

test("automate frames",async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

let totalFrames= page.frames();
console.log("Total Frames are: "+totalFrames.length);

await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("Frame1");

await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']").fill("Frame2");

let frameLoc= page.frameLocator("//frame[@src='frame_3.html']");
frameLoc.locator("//input[@name='mytext3']").fill("Frame3");
//nested
frameLoc.frameLocator("//iframe").locator("#i9").click();




await page.waitForTimeout(2000);



})


test("Automate nested frame",async({page})=>{

    await page.goto("https://demoqa.com/nestedframes");


    await page.locator("//h1[text()='Nested Frames']").scrollIntoViewIfNeeded();


    let frame1=page.frameLocator("#frame1");
    console.log(await frame1.getByText("Parent frame").innerText());

    let text=await frame1.frameLocator("//iframe[@srcdoc='<p>Child Iframe</p>']").getByText("Child Iframe").innerText();
    console.log(text);
    
await page.waitForTimeout(2000);

})

test.only("Automate Frame",async({page})=>{
await page.goto("https://selectorshub.com/iframe-scenario/");

let frame1=page.frameLocator("(//iframe[@id='pact1'])[1]");
let frame2=frame1.frameLocator("#pact2");
let frame3=frame2.frameLocator("#pact3");

await frame1.locator("#inp_val").fill("Selenium");
await frame2.locator("#jex").fill("Playwright");
await frame3.locator("#glaf").fill('Selenium');

await page.waitForTimeout(2000);
})