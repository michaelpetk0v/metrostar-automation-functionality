const { test, expect } = require('@playwright/test');
const { Internship } = require('../page_objects/internship.page')
const credentials = require('../data/credentials.json');
let internship;

// //Runs each test
test.beforeEach(async ({ page }) => {
  internship = new Internship(page);
  await page.goto('https://www.metrostar.com/');
});

// Describe is equivalent of a test suite
test.describe('Internships', () => {

  // Test is equivalent of a test case
  test('user should be able to subscribe', async ({ page }) => {

    // Test internship section menu
    await internship.cookiesBtn.click();
    await internship.careersBtn.click();
    await internship.internshipsBtn.click();
    await internship.subscribe(credentials.internship.name, credentials.internship.email);
    await internship.subscribeBtn.click();
    await expect(internship.thankYouPage).toBeVisible();

  });

});