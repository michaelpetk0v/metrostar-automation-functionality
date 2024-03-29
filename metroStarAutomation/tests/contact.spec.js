const { test, expect } = require('@playwright/test');
const { Contact } = require('../page_objects/contact.page')
const details = require('../data/details.json');
let contact;

//Runs each test
test.beforeEach(async ({ page }) => {
  contact = new Contact(page);
  await page.goto('/');
});

// Describe is equivalent of a test suite
test.describe('Contact Us', () => {
  // Test is equivalent of a test case
  test('user should be able send message', async ({ page }) => {
    await contact.cookiesBtn.click();
    await contact.contactUsBtn.click();
    await contact.fillOutContactUsForm(details.contactus.name, details.contactus.email);
    await contact.reasonForContactBtn.click();
    await contact.reasonForContactSelect.selectOption('Job Opportunity');
    await contact.giveUsDetailsInput.fill("I wish to become part of your team");
    // We don’t wanna spam you in prod env
  });
 });