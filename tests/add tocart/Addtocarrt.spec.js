import {test } from "@playwright/test";

test("Add to cart", async ({ page }) => {
  await page.goto("https://example.com");
  await page.click("text=Add to cart");
  await page.waitForSelector("text=Item added to cart");
});