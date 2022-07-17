const { test, expect } = require('@playwright/test');
const {JoinUs} = require('../page_objects/joinus.page')
const credentials = require('../data/credentials.json');
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
    await joinus.cookiesBtn.click();
    await joinus.careersBtn.click(); 
    await joinus.joinUsBtn.click();
    await joinus.openRolesBtn.click();
    await joinus.dataAnalystBtn.click();
    await joinus.apply(credentials.openroles.firstname, credentials.openroles.lastname, credentials.openroles.email, credentials.openroles.phonenumber);
    await joinus.pasteBtn.first().click();
    await joinus.resume(credentials.openroles.resume);
    await joinus.securityClearanceBtn.click();
    await joinus.securityClearanceSelect.click();
    await joinus.salary(credentials.openroles.targetsalary);
    await joinus.sponsorshipBtn.click();
    await joinus.sponsorshipSelect.click();
    await joinus.rightToWorkBtn.click();
    await joinus.rightToWorkSelect.click();
    await joinus.localMetroAreaBtn.click();
    await joinus.localMetroAreaSelect.click();
    await joinus.submitApplication.click();
    await expect(page).toHaveURL('https://www.metrostar.com/job-post/?gh_jid=5122191003')
    
  });

});