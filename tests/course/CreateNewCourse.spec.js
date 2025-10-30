import {test, expect} from "../../fixtures/auth.fixture.js";
import {LoginPage} from '../../pages/LoginPage.js';
import {HomePage} from '../../pages/HomePage.js';
import {getCurrentDate} from '../../utils/utility';
import {CoursePage} from '../../pages/CoursePage.js';

test.describe('Create New Course Tests', async () => {

    test.setTimeout(0)

    let loginPage;
    let coursePage;
    let homePage;

    test.beforeEach(async ({page}) => 
        
    {
        loginPage = new LoginPage(page);
        coursePage = new CoursePage(page);
        homePage = new HomePage(page);
    });

    test('Verify that user is able to create a new course with valid details', async ({page,loginPageExcel,courseCreationJSON}) => 
        {
        console.log("Course Data from Fixture: ", courseCreationJSON);
        await coursePage.clickOnManegeCourse();   
        await coursePage.clickOnAddNewCourse();
        const currentDate = getCurrentDate();
        const courseName = `Cypress Course ${currentDate}`;
        await coursePage.enterCourseName(courseName);
        await coursePage.enterCourseDescription(courseCreationJSON.description);
        await coursePage.enterInstructorName(courseCreationJSON.instructorname);
        await coursePage.enterCoursePrice(courseCreationJSON.courseFees);
        await coursePage.selectStartDateFromCalender();
        await coursePage.selectEndDateFromCalender();
        await coursePage.selectCategory();
        await coursePage.uploadThubnail('./testdata/Image1.png');
        await coursePage.clickOnSaveButton();
        await expect(await coursePage.verifyCourseCreated(courseName)).toBeVisible()
        await coursePage.deleteCourse(courseName);
        await expect(await coursePage.verifyCourseCreated(courseName)).not.toBeVisible();
        await homePage.logoutFromApplication();
        expect(await loginPage.checkNewUserSignupVisible()).toBeVisible();

    });
});

