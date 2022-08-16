const { test, expect } = require('@playwright/test');
const { Careers } = require('../page_objects/careers.page')
const details = require('../data/details.json');
let careers;

// //Runs each test
test.beforeEach(async ({ page }) => {
  careers = new Careers(page);
  await page.goto('/');
});

// Describe is equivalent of a test suite
test.describe('Open Roles', () => {
  // Test is equivalent of a test case
  test('user should be able to fill a form', async ({ page }) => {
    await careers.cookiesBtn.click();
    await careers.careersBtn.click();
    await careers.joinUsBtn.click();
    await careers.openRolesBtn.click();
    await careers.filterBtn.click();
    await careers.allJobsBtn.first().click();
    await careers.dataAnalystBtn.click();
    await careers.fillOutJobForm(details.openroles.firstname, details.openroles.lastname, details.openroles.email, details.openroles.phonenumber);
    await careers.manualResumeBtn.click();
    await careers.pasteTextField.click();
    await careers.fillOutResume(details.openroles.resume);
    await careers.securityClearanceBtn.click();
    await careers.securityClearanceSelect.click();
    await careers.salaryRangeBtn.click();
    await careers.salaryInput.click();
    await careers.sponsorshipBtn.click();
    await careers.sponsorshipSelect.click();
    await careers.rightToWorkBtn.click();
    await careers.rightToWorkSelect.click();
    await careers.localMetroAreaBtn.click();
    await careers.localMetroAreaSelect.click();
    // We don’t wanna spam you in prod env
  });
});