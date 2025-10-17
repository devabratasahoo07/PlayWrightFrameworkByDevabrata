import { BasePage } from "./BasePage.js"


export class HomePage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.page=page
        this.menu=page.locator("//img[@alt='menu']")
        this.signout=page.locator("//button[normalize-space()='Sign out']")    
    }

    async logoutFromApplication()
    {
        await this.menu.click()

        await this.signout.click()
    }
}