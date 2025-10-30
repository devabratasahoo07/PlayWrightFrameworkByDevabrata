import {test,expect} from "../../fixtures/auth.fixture.js"
import {CoursePage} from "../../pages/CoursePage.js"
import {CategoryPage} from "../../pages/CategoryPage.js"
import {HomePage} from "../../pages/HomePage.js"

test("Verify User Should Be Able To Create Category",async function ({page,context,loginPage}) 
{
   // test.setTimeout(0)
    
    const categoryName="Playwright"

    const coursePage=new CoursePage(page)

    const homePage=new HomePage(page)

    const openCategoryPage=()=> coursePage.clickOnManageCategory(); 

    const newPage = await coursePage.waitForNewPage(context,openCategoryPage)

    const categoryPage=new CategoryPage(newPage)

    await categoryPage.acceptAlert("accept",categoryName)

    await categoryPage.clickOnAddNewCategory()

    await expect(await categoryPage.verifyCategoryIsPresent(categoryName)).toBeVisible()

    await categoryPage.deleteCategory(categoryName)

    await expect(await categoryPage.verifyCategoryIsPresent(categoryName)).not.toBeVisible()

    await newPage.close()

    await page.bringToFront()

    await homePage.logoutFromApplication()

})

