const { test, expect } = require('@playwright/test');
const { Internship } = require('../page_objects/internship.page')
const details = require('../data/details.json');
let internship;

// //Runs each test
test.beforeEach(async ({ page }) => {
  internship = new Internship(page);
  await page.goto('/');
});

// Describe is equivalent of a test suite
test.describe('Internships', () => {
  // Test is equivalent of a test case
  test('user should be able to subscribe', async ({ page }) => {
    await internship.cookiesBtn.click();
    await internship.careersBtn.click();
    await internship.internshipsBtn.click();
    await internship.fillOutChartWithUsForm(details.internship.name, details.internship.email);
  });
});