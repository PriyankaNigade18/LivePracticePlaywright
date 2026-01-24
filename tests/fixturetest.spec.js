
import {test} from "../Fixtures/auth.fixture"

test.beforeEach("launch app",async({page})=>{
page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})
test("Test login",async({loggedInUser})=>{

let page=loggedInUser;
await page.waitForTimeout(3000);
})