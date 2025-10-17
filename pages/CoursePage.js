import { getCurrentDate } from '../utils/utility.js';
import { BasePage } from './BasePage.js';

export class CoursePage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.page=page
        this.manage=page.locator("//span[normalize-space()='Manage']")
        this.manageCourse=page.locator("//a[normalize-space()='Manage Courses']") 
        this.manageCategory=page.locator("//a[normalize-space()='Manage Categories']")
        this.addNewCourse=page.locator("//button[normalize-space()='Add New Course']")
        this.thubnail=page.locator("//input[@id='thumbnail']") 
        this.courseName=page.locator("//input[@id='name']")
        this.shortDescription=page.locator("//textarea[@id='description']") 
        this.instructor=page.locator("//input[@id='instructorNameId']")
        this.coursePrice=page.locator("//input[@id='price']")
        this.startDate=page.locator("//input[@name='startDate']")
        this.nextMonth=page.locator("//button[@aria-label='Next Month']")
        this.selectStartDate=page.locator("//div[text()='1']").nth(0)
        this.endDate=page.locator("//input[@name='endDate']")
        this.selectEndDate=page.locator("//div[text()='15']").nth(0)
        this.category=page.locator("//div[normalize-space()='Select Category']")
        this.categoryNames=page.locator("//button[normalize-space()='Cypress']")
        this.saveButton=page.locator("//button[normalize-space()='Save']")

    }

    async clickOnManegeCourse()
    {
        await this.manage.hover()
        await this.page.waitForTimeout(1000)
        await this.manageCourse.click()
    }

    async clickOnManageCategory()
    {
        await this.manage.hover()
        await this.page.waitForTimeout(1000)
        await this.manageCategory.click()
    }

    async clickOnAddNewCourse()
    {
        await this.addNewCourse.click()
    }

    async uploadThubnail(imagePath)
    {
        await this.thubnail.setInputFiles(imagePath)
    }

    async enterCourseName(courseName)
    {
        //const currentDate = getCurrentDate();
        await this.courseName.fill(`${courseName}`)
    }

    async enterCourseDescription(description)
    {
        await this.shortDescription.fill(description)
    }

    async enterInstructorName(instructorName)
    {
        await this.instructor.fill(instructorName)
    }

    async enterCoursePrice(price)
    {
        await this.coursePrice.fill(price)
    }



    async selectStartDateFromCalender()
    {
        await this.startDate.click()
        await this.nextMonth.click()
        await this.selectStartDate.click()
    }

    async selectEndDateFromCalender()
    {
        await this.endDate.click()
        await this.selectEndDate.click()
    }

    async selectCategory()
    {
        await this.category.click()
        await this.categoryNames.click()
    }

    async clickOnSaveButton()
    {
        await this.saveButton.click()
    }

    async deleteCourse(courseName)
    {
        await this.page.locator(`//td[normalize-space()='${courseName}']//following::button[1]`).click()
    }

    async verifyCourseCreated(courseName)
    {
        return await this.page.locator(`//td[normalize-space()='${courseName}']`)
    }


}