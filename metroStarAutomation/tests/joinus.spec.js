const { test, expect } = require('@playwright/test');
const { JoinUs } = require('../page_objects/joinus.page')
const details = require('../data/details.json');
let joinus;

// //Runs each test
test.beforeEach(async ({ page }) => {
  joinus = new JoinUs(page);
  await page.goto('https://www.metrostar.com/');
});

// Describe is equivalent of a test suite
test.describe('Open Roles', () => {
  // Test is equivalent of a test case
  test('user should be able to submit application', async ({ page }) => {
    // Test Join Us section
    await joinus.cookiesBtn.click();
    await joinus.careersBtn.click();
    await joinus.joinUsBtn.click();
    await joinus.openRolesBtn.click();
    await joinus.dataAnalystBtn.click();
    await joinus.fillOutJobForm(details.openroles.firstname, details.openroles.lastname, details.openroles.email, details.openroles.phonenumber);
    await joinus.pasteBtn.first().click();
    await joinus.fillOutResume(details.openroles.resume);
    await joinus.securityClearanceBtn.click();
    await joinus.securityClearanceSelect.click();
    await joinus.fillOutSalaryTarget(details.openroles.targetsalary);
    await joinus.sponsorshipBtn.click();
    await joinus.sponsorshipSelect.click();
    await joinus.rightToWorkBtn.click();
    await joinus.rightToWorkSelect.click();
    await joinus.localMetroAreaBtn.click();
    await joinus.localMetroAreaSelect.click();
    await joinus.submitApplication.click();
    await expect(page).toHaveURL('/job-post/?gh_jid=5122191003')
  });
});