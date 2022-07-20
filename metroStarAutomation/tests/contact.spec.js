const { test, expect } = require('@playwright/test');
const {Contact} = require('../page_objects/contact.page')
const credentials = require('../data/credentials.json');
let contact;

// //Runs each test
test.beforeEach(async ({ page }) => {
  contact = new Contact(page);
  await page.goto('https://www.metrostar.com/');
});

// Describe is equivalent of a test suite
test.describe('Contact Us', () => {
  
  // Test is equivalent of a test case
  test('user should be able send message', async ({ page }) => {
    await contact.cookiesBtn.click();
    await contact.contactUsBtn.click();
    await contact.contacts(credentials.contactus.name, credentials.contactus.email);
    await contact.reasonForContactBtn.click();
    await contact.reasonForContactSelect.selectOption('Job Opportunity');
    await contact.info(credentials.contactus.details);
    await contact.sendMessageBtn.click();
    await expect(contact.thankYouPage).toBeVisible();
    
  });

});