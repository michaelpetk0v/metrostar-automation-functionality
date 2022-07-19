const { test, expect } = require('@playwright/test');
const { Search } = require('../page_objects/search.page')
const credentials = require('../data/credentials.json');
let search;

// //Runs each test
test.beforeEach(async ({ page }) => {
    search = new Search(page);
    await page.goto('https://www.metrostar.com/');
});

// Describe is equivalent of a test suite
test.describe('Search', () => {

    // Test is equivalent of a test case
    test('user should be able to use search function', async ({ page }) => {
        await search.cookiesBtn.click();
        await search.searchBtn.click();
        await search.searchInput.fill('contact us');
        await search.searchInput.press('Enter');
        await expect(page).toHaveURL('https://www.metrostar.com/search-results/?ss360Query=contact%20us');
        await search.contactUsResultBtn.click();
        await search.form(credentials.searchfunction.name, credentials.searchfunction.email);
        await search.reasonForContactBtn.click();
        await search.reasonForContactSelect.click();
        await search.details(credentials.searchfunction.details);
        await search.submitBtn.click();
    });

});