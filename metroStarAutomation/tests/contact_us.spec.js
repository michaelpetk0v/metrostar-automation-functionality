const { test, expect } = require('@playwright/test');
const { ContactPage } = require('../page_objects/contact_us.page')
const credentialss = require('../data/credentialss.json')
let contactPage;

test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await page.goto('/');
  });

  test.describe('Contact us', () => {
    test('Should fill contact us form, ', async ({ page }) => {
      // Click "Contact us" button.
      await contactPage.cookiesAcceptBtn.click();
      await contactPage.contactUsBtn.click();
      await expect(contactPage.contactUsDirectlyText).toBeVisible();
      // Fill the contact us form.
      await contactPage.reasonMenuDropdownBtn.click();
      await contactPage.reasonMenuDropdownButton.selectOption('Other');
      // Test works when Captcha doesn't triger. Otherwise it fails.
      await contactPage.fillOutContactUsForm(credentialss.contactUs.name, credentialss.contactUs.email, credentialss.contactUs.details);
      await expect(contactPage.thankYouText).toBeVisible();  
    })
  })