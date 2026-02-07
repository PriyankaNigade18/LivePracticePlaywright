import {test,expect} from "@playwright/test"


test.beforeAll(async()=>{
    console.log("Before all exectes before all test");
    
})

test.afterAll(async()=>{
    console.log("After all exectes after all test");
    
})

test.beforeEach(async()=>{
    console.log("Before each exectes before every test");
    
})
test.afterEach(async()=>{
    console.log("After each exectes after every test");
    
})
test("Home page test",()=>{
    console.log("Home page test.....");
    
})
test.skip("Search page test",()=>{
    console.log("Search page test.....");
    
})
test.skip("Cart page test",()=>{
    console.log("Cart page test.....");
    
})