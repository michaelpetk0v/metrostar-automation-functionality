const { test, expect } = require('@playwright/test');
const { MainMenu } = require('../page_objects/mainMenu.page');
let mainMenu

test.beforeEach(async ({ page }) => {
    mainMenu = new MainMenu(page);
    await page.goto('https://www.metrostar.com/');
  });
  
  test.describe('User should get redirected upon click to menu buttons in the main menu', () => {
    test('"Our work" menu button and sub menu buttons test.', async ({ page }) => {
      // "Our work" menu button functionality. 
      await mainMenu.cookiesAcceptBtn.click();
      await mainMenu.ourWorkMenuBtn.click();
      await expect(mainMenu.servicesSolutionsSubMenuBtn).toBeVisible();
      await mainMenu.servicesSolutionsSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/services/');
      await page.goBack();
      await mainMenu.ourWorkMenuBtn.click();
      await mainMenu.rdSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/research-and-development/');
      await page.goBack();
      await mainMenu.ourWorkMenuBtn.click();
      await mainMenu.caseStudiesSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/case-studies/');
      await page.goBack();
      await mainMenu.ourWorkMenuBtn.click();
      await mainMenu.contractVehiclesSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/contract-vehicles/');
    })

    test('"Industies" menu button and sub menu buttons test.', async ({ page }) => {
      // "Industries" menu button functionality. 
      await mainMenu.cookiesAcceptBtn.click();
      await mainMenu.industiesMenuBtn.click();
      await expect(mainMenu.civilianSubMenuBtn).toBeVisible();
      await mainMenu.civilianSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/civilian/');
      await page.goBack();
      await mainMenu.industiesMenuBtn.click();
      await mainMenu.defenseSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/defense/');
      await page.goBack();
      await mainMenu.industiesMenuBtn.click();
      await mainMenu.healthSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/health/');
      await page.goBack();
      await mainMenu.industiesMenuBtn.click();
      await mainMenu.homelandSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/homeland-law-enforcement/');
      await page.goBack();
      await mainMenu.industiesMenuBtn.click();
      await mainMenu.intelligenceSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/intelligence/');
    })

    test('"Ideas" menu button and sub menu buttons test.', async ({ page }) => {
      // "Ideas" menu button functionality. 
      await mainMenu.cookiesAcceptBtn.click();
      await mainMenu.ideasMenuBtn.click();
      await expect(mainMenu.blogSubMenuBtn).toBeVisible();
      await mainMenu.blogSubMenuBtn.click();
      await expect(page).toHaveURL('https://blog.metrostar.com/');
    })

    test('"Careers" menu button and sub menu buttons test.', async ({ page }) => {
      // "Careers" menu button functionality. 
      await mainMenu.cookiesAcceptBtn.click();
      await mainMenu.careersMunuBtn.click();
      await expect(mainMenu.joinusSubMenuBtn).toBeVisible();
      await mainMenu.joinusSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/join-us/');
      await page.goBack();
      await mainMenu.careersMunuBtn.click();
      await mainMenu.internshipSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/internships/');
    })

    test('"About" menu button and sub menu buttons test.', async ({ page }) => {
      // "About" menu button functionality. 
      await mainMenu.cookiesAcceptBtn.click();
      await mainMenu.aboutMenuBtn.click();
      await expect(mainMenu.companySubMenuBtn).toBeVisible();
      await mainMenu.companySubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/company/');
      await page.goBack();
      await mainMenu.aboutMenuBtn.click();
      await mainMenu.cultureSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/culture/');
      await page.goBack();
      await mainMenu.aboutMenuBtn.click();
      await mainMenu.leadershipSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/leaders/');
      await page.goBack();
      await mainMenu.aboutMenuBtn.click();
      await mainMenu.newsEventsSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/news-events/');
    })
})