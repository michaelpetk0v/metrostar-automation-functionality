const { test, expect } = require('@playwright/test');
const { Search } = require('../page_objects/search.page')
const details = require('../data/details.json');
let search;

// //Runs each test
test.beforeEach(async ({ page }) => {
    search = new Search(page);
    await page.goto('/');
});

// Describe is equivalent of a test suite
test.describe('Search', () => {
    // Test is equivalent of a test case
    test('user should be able to use search function', async ({ page }) => {
        await search.cookiesBtn.click();
        await search.searchBtn.click();
        await search.searchInput.fill('contact us');
        await search.searchInput.press('Enter');
        await expect(page).toHaveURL('/search-results/?ss360Query=contact%20us');
        await search.contactUsResultBtn.click();
        await search.fillOutContactUsForm(details.searchfunction.name, details.searchfunction.email);
        await search.reasonForContactSelect.selectOption('Job Opportunity');
        await search.fillOutDetails(details.searchfunction.details);
        // We don’t wanna spam you in prod env
    });
});