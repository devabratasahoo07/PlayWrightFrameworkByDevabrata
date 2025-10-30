
import {test} from "../../fixtures/auth.fixture.js"

import { LoginPage } from "../../pages/LoginPage.js"

test.skip("Login Scenario with hard coded data",async function({page,loginPage})
{

    await page.waitForTimeout(2000)
    
})

test.skip("Login Scenario with json data",async function({page,loginPageJSON})
{
   
    await page.waitForTimeout(5000)
    
})

test("Login Scenario without fixture",async function({page})
{
    const loginPage=new LoginPage(page)

    await loginPage.gotoURL()

    await loginPage.fillEmail("admin@email.com")

    await loginPage.fillPassword("admin@123")

    await loginPage.submit()
    
})
