import { BasePage } from "./BasePage.js"

export class CategoryPage extends BasePage{

    constructor(page)
    {
        super(page)

        this.page=page

        this.addNewCategory=page.locator("//button[normalize-space()='Add New Category']")

        this.deleteConfirmation=page.locator("//button[@class='action-btn'][normalize-space()='Delete']")
    }

    async clickOnAddNewCategory()
    {
        this.addNewCategory.click()
    }

    async verifyCategoryIsPresent(categoryName)
    {
        return this.page.locator(`//td[normalize-space()='${categoryName}']`)
    }

    async deleteCategory(categoryName)
    {
        this.page.locator(`//td[normalize-space()='${categoryName}']//following::button[1]`).click()
        this.deleteConfirmation.click()

    }
}