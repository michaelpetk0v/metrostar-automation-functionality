const { test, expect } = require('@playwright/test');
const {Expert} = require('../page_objects/expert.page')
const credentials = require('../data/credentials.json');
let expert;

// //Runs each test
test.beforeEach(async ({ page }) => {
  expert = new Expert(page);
  await page.goto('https://www.metrostar.com/');
});

// Describe is equivalent of a test suite
test.describe('contact an expert', () => {
  
  // Test is equivalent of a test case
  test('user should be able to contact an expert', async ({ page }) => {
    await expert.cookiesBtn.click();
    await expert.aboutBtn.click();
    await expert.companyBtn.click();
    await expert.whatWeDoBtn.first().click();
    await expect(page).toHaveURL('https://www.metrostar.com/services/');
    await expert.letsTalkBtn.first().click();
    await expect(page).toHaveURL('https://www.metrostar.com/capabilities-contact/');
    await expert.submit(credentials.contactanexpert.name, credentials.contactanexpert.email);
    await expert.devSecOpsBtn.click();
    await expert.yourRequestField.fill("Hi there. It's nice to see you again.");
    await expert.submitBtn.click();
    await expect(expert.contactAnExpertPage).toBeVisible();
    
  });

});