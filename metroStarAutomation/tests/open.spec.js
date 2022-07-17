const { test, expect } = require('@playwright/test');
const {OpenRoles} = require('../page_objects/open.page')
const credentials = require('../data/credentials.json');
let openRoles;

// //Runs each test
test.beforeEach(async ({ page }) => {
  openRoles = new OpenRoles(page);
  await page.goto('https://www.metrostar.com/');
});

// Describe is equivalent of a test suite
test.describe('Open Roles', () => {
  
  // Test is equivalent of a test case
  test('user should be able to open roles', async ({ page }) => {
    await openRoles.cookiesBtn.click();
    await openRoles.careersBtn.click(); 
    await openRoles.joinUsBtn.click();
    await openRoles.openRolesBtn.click();
    await openRoles.dataAnalystBtn.click();
    await openRoles.apply(credentials.metrostar.firstname, credentials.metrostar.lastname, credentials.metrostar.email, credentials.metrostar.phonenumber);
    await openRoles.pasteBtn.first().click();
    await openRoles.resume(credentials.metrostar.resume);
    await openRoles.securityClearanceBtn.click();
    await openRoles.securityClearanceSelect.click();
    await openRoles.salary(credentials.metrostar.targetsalary);
    await openRoles.sponsorshipBtn.click();
    await openRoles.sponsorshipSelect.click();
    await openRoles.rightToWorkBtn.click();
    await openRoles.rightToWorkSelect.click();
    await openRoles.localMetroAreaBtn.click();
    await openRoles.localMetroAreaSelect.click();
    await openRoles.submitApplication.click();
    await expect(page).toHaveURL('https://www.metrostar.com/job-post/?gh_jid=5122191003')
    
  });

});













// test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.locator('text=Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();
  
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
