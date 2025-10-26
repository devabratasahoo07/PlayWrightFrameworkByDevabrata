import {test } from "@playwright/test";

test("Add to cart", async ({ page }) => {
  await page.goto("https://example.com");
  await page.click("text=Add to cart");
  await page.waitForSelector("text=Item added to cart");
});
test("1st test",async({page})=>{

})
test("2nd test",async({page})=>{

})
test("3rd test",async({page})=>{

})
test("4th test",async({page})=>{

})
test("5th test",async({page})=>{

})
