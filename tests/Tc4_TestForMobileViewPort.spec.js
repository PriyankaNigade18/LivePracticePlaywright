

import {test,expect} from "@playwright/test"

test("Test for facebook ",async({page})=>{

    await page.goto("https://www.facebook.com",{waitUntil:"load"});

    await page.waitForTimeout(4000);
})