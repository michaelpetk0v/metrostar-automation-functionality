const { test, expect } = require('@playwright/test');
const { Work } = require('../page_objects/work.page')
const credentials = require('../data/credentials.json');
let work;

// //Runs each test
test.beforeEach(async ({ page }) => {
    work = new Work(page);
    await page.goto('https://www.metrostar.com/');
});

// Describe is equivalent of a test suite
test.describe('work with us', () => {

    // Test is equivalent of a test case
    test('user should be able to submit form', async ({ page }) => {
        await work.cookiesBtn.click();
        await work.industriesBtn.click();
        await work.intelligensBtn.click();
        await work.workWithUsBtn.first().click();
        await expect(page).toHaveURL('https://www.metrostar.com/industries-contact/');
        await work.form(credentials.workwithus.name, credentials.workwithus.email);
        await work.healthBtn.click();
        await work.yourRequestField.fill('Hi there.');
        await work.submitBtn.click();
    });

});