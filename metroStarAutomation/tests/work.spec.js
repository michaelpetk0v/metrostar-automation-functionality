const { test, expect } = require('@playwright/test');
const { Work } = require('../page_objects/work.page')
const details = require('../data/details.json');
let work;

// //Runs each test
test.beforeEach(async ({ page }) => {
    work = new Work(page);
    await page.goto('/');
});

// Describe is equivalent of a test suite
test.describe('work with us', () => {
    // Test is equivalent of a test case
    test('user should be able to submit form', async ({ page }) => {
        await work.cookiesBtn.click();
        await work.industriesBtn.click();
        await work.intelligensBtn.click();
        await work.workWithUsBtn.first().click();
        await expect(page).toHaveURL('/industries-contact/');
        await work.fillOutTheRightTeamForm(details.workwithus.name, details.workwithus.email);
        await work.healthBtn.click();
        await work.yourRequestField.fill('Hi there.');
        // We don’t wanna spam you in prod env
    });
});