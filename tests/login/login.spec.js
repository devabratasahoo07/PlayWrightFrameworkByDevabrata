import { test } from "../../fixtures/auth.fixture.js";
import { LoginPage } from "../../pages/LoginPage.js"

test.skip("login Scenario",async function({page,loginpage}){


await page.waitForTimeout(2000)
})
test.skip ("login Scenario useing JSON",async function({page,loginpageUsingJSON}){


await page.waitForTimeout(2000)
})
test("login Scenario without Fixture",async function({page,loginpageUsingJSON}){
const loginPage=new LoginPage(page)

    await loginPage.gotoURL()

    await loginPage.fillEmail("admin@email.com")

    await loginPage.fillPassword("admin@123")

    await loginPage.submit()

await page.waitForTimeout(2000)
})