const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page_objects/homePage.page');
let homePage

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
  });
  
  test.describe('Should get redirected upon click to menu buttons in on the Home page', () => {
    test('"Our work" menu button and sub menu buttons test.', async ({ page }) => {
      // "Our work" menu button functionality. 
      await homePage.cookiesAcceptBtn.click();
      await homePage.ourWorkMenuBtn.click();
      await expect(homePage.servicesSolutionsSubMenuBtn).toBeVisible();
      await homePage.servicesSolutionsSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/services/');
      await page.goBack();
      await homePage.ourWorkMenuBtn.click();
      await homePage.researchDevelopmentSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/research-and-development/');
      await page.goBack();
      await homePage.ourWorkMenuBtn.click();
      await homePage.caseStudiesSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/case-studies/');
      await page.goBack();
      await homePage.ourWorkMenuBtn.click();
      await homePage.contractVehiclesSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/contract-vehicles/');
    })

    test('"Industies" menu button and sub menu buttons test.', async ({ page }) => {
      // "Industries" menu button functionality. 
      await homePage.cookiesAcceptBtn.click();
      await homePage.industiesMenuBtn.click();
      await expect(homePage.civilianSubMenuBtn).toBeVisible();
      await homePage.civilianSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/civilian/');
      await page.goBack();
      await homePage.industiesMenuBtn.click();
      await homePage.defenseSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/defense/');
      await page.goBack();
      await homePage.industiesMenuBtn.click();
      await homePage.healthSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/health/');
      await page.goBack();
      await homePage.industiesMenuBtn.click();
      await homePage.homelandSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/homeland-law-enforcement/');
      await page.goBack();
      await homePage.industiesMenuBtn.click();
      await homePage.intelligenceSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/intelligence/');
    })

    test('"Ideas" menu button and sub menu buttons test.', async ({ page }) => {
      // "Ideas" menu button functionality. 
      await homePage.cookiesAcceptBtn.click();
      await homePage.ideasMenuBtn.click();
      await expect(homePage.blogSubMenuBtn).toBeVisible();
      await homePage.blogSubMenuBtn.click();
      await expect(page).toHaveURL('https://blog.metrostar.com/');
    })

    test('"Careers" menu button and sub menu buttons test.', async ({ page }) => {
      // "Careers" menu button functionality. 
      await homePage.cookiesAcceptBtn.click();
      await homePage.careersMunuBtn.click();
      await expect(homePage.joinusSubMenuBtn).toBeVisible();
      await homePage.joinusSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/join-us/');
      await page.goBack();
      await homePage.careersMunuBtn.click();
      await homePage.internshipSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/internships/');
    })

    test('"About" menu button and sub menu buttons test.', async ({ page }) => {
      // "About" menu button functionality. 
      await homePage.cookiesAcceptBtn.click();
      await homePage.aboutMenuBtn.click();
      await expect(homePage.companySubMenuBtn).toBeVisible();
      await homePage.companySubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/company/');
      await page.goBack();
      await homePage.aboutMenuBtn.click();
      await homePage.cultureSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/culture/');
      await page.goBack();
      await homePage.aboutMenuBtn.click();
      await homePage.leadershipSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/leaders/');
      await page.goBack();
      await homePage.aboutMenuBtn.click();
      await homePage.newsEventsSubMenuBtn.click();
      await expect(page).toHaveURL('https://www.metrostar.com/news-events/');
    })
})