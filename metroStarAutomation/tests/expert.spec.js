const { test, expect } = require('@playwright/test');
const { Expert } = require('../page_objects/expert.page')
const details = require('../data/details.json');
let expert;

// //Runs each test
test.beforeEach(async ({ page }) => {
  expert = new Expert(page);
  await page.goto('/');
});

// Describe is equivalent of a test suite
test.describe('contact an expert', () => {
  // Test is equivalent of a test case
  test('user should be able to contact an expert', async ({ page }) => {
    // Test section expert
    await expert.cookiesBtn.click();
    await expert.aboutBtn.click();
    await expert.companyBtn.click();
    await expert.whatWeDoBtn.first().click();
    await expect(page).toHaveURL('/services/');
    await expert.letsTalkBtn.first().click();
    await expect(page).toHaveURL('/capabilities-contact/');
    await expert.fillOutContactAnExpertForm(details.contactanexpert.name, details.contactanexpert.email);
    await expert.devSecOpsBtn.click();
    await expert.yourRequestField.fill("Hi there. It's nice to see you again.");
    await expert.submitBtn.click();
    await expect(expert.contactAnExpertPage).toBeVisible();
  });
});