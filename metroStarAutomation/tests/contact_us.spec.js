const { test, expect } = require('@playwright/test');
const { Contact } = require('../page_objects/contact_us.page')
const credentialss = require('../data/credentialss.json')
let contact;

test.beforeEach(async ({ page }) => {
    contact = new Contact(page);
    await page.goto('https://www.metrostar.com/');
  });

  test.describe('Contact us page functionality test', () => {
    test('User should be able to fill contact us form, ', async ({ page }) => {
      // Click "Contact us" button.
      await contact.cookiesAcceptBtn.click();
      await contact.contactUsBtn.click();
      await expect(contact.contactUsDirectlyHeader).toBeVisible();
      // Fill the contact us form.
      await contact.reasonMenuDropdownBtn.click();
      await contact.reasonMenuDropdownSel.selectOption('Other');
      // Test works when Captcha doesn't triger. Otherwise it fails.
      await contact.inputForm(credentialss.contactUs.name, credentialss.contactUs.email, credentialss.contactUs.details);
      await expect(contact.thankyouText).toBeVisible();  
    })
  })