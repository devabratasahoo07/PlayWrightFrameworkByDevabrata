import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"
import { readJson } from "../utils/readjson.js"
import { readCSV } from "../utils/readcsv.js";
import { readExcel } from "../utils/readexcel.js";

export const test=base.extend(
    {

            loginPage:async ({page},use)=>
            {

                console.log("Running Login Page Fixture Before Test");

                const loginPage=new LoginPage(page)
                
                await loginPage.gotoURL()
                
                await loginPage.fillEmail("admin@email.com")
                
                await loginPage.fillPassword("admin@123")
                
                await loginPage.submit()

                await use(loginPage)

                console.log("Running After Test ");
                
                
            },

            loginPageJSON:async ({page},use)=>
            {

                console.log("Running Login Page Fixture Before Test Using JSON File");

                const data=readJson("./testdata/users.json")

                const loginPage=new LoginPage(page)
                
                await loginPage.gotoURL()
                
                await loginPage.fillEmail(data.username)
                
                await loginPage.fillPassword(data.password)
                
                await loginPage.submit()

                await use(loginPage)

                console.log("Running After Test For JSON File");
                
                
            },
             courseCreationJSON:async ({page},use)=>
            {

                console.log("Running Course Creation Fixture Before Test Using JSON File");

                const data=readJson("./testdata/course.json")

                await use(data)

                console.log("Running After Test For JSON File");
                
                
            }
            ,

            // get the current status of the test and if it is failed take the screenshot

              page:async ({page},use,testInfo)=>
            {

                await use(page)
                // after use will get executed after every test

                if(testInfo.status!=testInfo.expectedStatus)
                {
                  const path=await page.screenshot({path:`screenshots/${testInfo.title}_${Date.now()}.png`})

                  await testInfo.attach('screenshot',{body:path,contentType:"image/png"})  

                }
                
                
            }


    
    }

)

export const expect = test.expect;