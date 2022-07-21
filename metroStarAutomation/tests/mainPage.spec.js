const { test, expect } = require('@playwright/test');
const { MainPage } = require('../page_objects/mainPage.page')
let mainPage;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await page.goto('https://www.metrostar.com/');
  });
  
  test.describe('Main page buttons functionality tests', () => {
    test('User should get redirected to discription text upon click to menu buttons on the main page', async ({ page }) => {
      // Click "Applied Intelligence" button. 
      await mainPage.appliedIntelligenceBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#ai`);
      await page.goBack();
      await expect(mainPage.appliedIntelligenceBtn).toBeVisible();
      // Click "DevSecOps" button.
      await mainPage.devSecOpsBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_devsecops`);
      await page.goBack();
      await expect(mainPage.devSecOpsBtn).toBeVisible();
      // Click "Human-Centered Design" button.
      await mainPage.humanCenteredDesignBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_hcd`);
      await page.goBack();
      await expect(mainPage.humanCenteredDesignBtn).toBeVisible();
      // Click "Cloud" button.
      await mainPage.cloudBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_cloud`);
      await page.goBack();
      await expect(mainPage.cloudBtn).toBeVisible();
      // Click "Cybersecurity" button.
      await mainPage.cybersecurityBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_cyber`);
      await page.goBack();
      await expect(mainPage.cybersecurityBtn).toBeVisible();
      // Click "Enterprise IT" button.
      await mainPage.enterpriseItBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_enterpriseit`);
      await page.goBack();
      await expect(mainPage.enterpriseItBtn).toBeVisible();
      // Click "learn more" button.
      await mainPage.learnMoreBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/`);
      await page.goBack();
      await expect(mainPage.learnMoreBtn).toBeVisible();
      // Click "more featured work" button.
      await mainPage.moreFeaturedBtn.click();
      await expect(page).toHaveURL(`https://blog.metrostar.com/project-snapshots`);
      await page.goBack();
      await expect(mainPage.moreFeaturedBtn).toBeVisible();
      // Click "find a career you love" button.
      await mainPage.findACareerYouLoveBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/join-us/`);
      await page.goBack();
      await expect(mainPage.findACareerYouLoveBtn).toBeVisible();
    });
  });