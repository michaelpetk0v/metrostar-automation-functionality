const { test, expect } = require('@playwright/test');
const { Main } = require('../page_objects/main.page')
let main;

test.beforeEach(async ({ page }) => {
    main = new Main(page);
    await page.goto('/');
  });
  
  test.describe('Main page buttons functionality tests', () => {
    test('Should get redirected to discription text upon click on "Applied Intelligence" button', async ({ page }) => {
      // Click "Applied Intelligence" button. 
      await main.appliedIntelligenceBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#ai`);
      await page.goBack();
      await expect(main.appliedIntelligenceBtn).toBeVisible();
    });

      test('Should get redirected to discription text upon click on "DevSecOps" button', async ({ page }) => {
      // Click "DevSecOps" button.
      await main.devSecOpsBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_devsecops`);
      await page.goBack();
      await expect(main.devSecOpsBtn).toBeVisible();
    });

      test('Should get redirected to discription text upon click on "Human-Centered Design" button', async ({ page }) => {
      // Click "Human-Centered Design" button.
      await main.humanCenteredDesignBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_hcd`);
      await page.goBack();
      await expect(main.humanCenteredDesignBtn).toBeVisible();
    });

      test('Should get redirected to discription text upon click on "Cloud" button', async ({ page }) => {
      // Click "Cloud" button.
      await main.cloudBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_cloud`);
      await page.goBack();
      await expect(main.cloudBtn).toBeVisible();
    });

      test('Should get redirected to discription text upon click on "Cybersecurity" button', async ({ page }) => {
      // Click "Cybersecurity" button.
      await main.cybersecurityBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_cyber`);
      await page.goBack();
      await expect(main.cybersecurityBtn).toBeVisible();
    });

      test('Should get redirected to discription text upon click on "Enterprise IT" button', async ({ page }) => {
      // Click "Enterprise IT" button.
      await main.enterpriseItBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/#_enterpriseit`);
      await page.goBack();
      await expect(main.enterpriseItBtn).toBeVisible();
    });

      test('Should get redirected to discription text upon click on "learn more" button', async ({ page }) => {
      // Click "learn more" button.
      await main.learnMoreBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/services/`);
      await page.goBack();
      await expect(main.learnMoreBtn).toBeVisible();
    });

      test('Should get redirected to discription text upon click on "more featured work" button', async ({ page }) => {
      // Click "more featured work" button.
      await main.moreFeaturedBtn.click();
      await expect(page).toHaveURL(`https://blog.metrostar.com/project-snapshots`);
      await page.goBack();
      await expect(main.moreFeaturedBtn).toBeVisible();
    });

      test('Should get redirected to discription text upon click on "find a career you love" button', async ({ page }) => {
      // Click "find a career you love" button.
      await main.findACareerYouLoveBtn.click();
      await expect(page).toHaveURL(`https://www.metrostar.com/join-us/`);
      await page.goBack();
      await expect(main.findACareerYouLoveBtn).toBeVisible();
    });
  });