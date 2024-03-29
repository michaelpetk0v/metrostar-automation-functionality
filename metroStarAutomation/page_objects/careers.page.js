exports.Careers = class Careers {

    constructor(page) {
        this.page = page;
        this.cookiesBtn = page.locator('text=Accept');
        this.careersBtn = page.locator('//span[text()="careers"]');
        this.joinUsBtn = page.locator('//span[text()="join us"]');
        this.openRolesBtn = page.locator('.fusion-text-2 [class="fusion-button-wrapper"] [href="https://www.metrostar.com/join-us/#openroles"]');
        this.filterBtn = page.frameLocator('#openroles iframe').locator('text=filter by departmentkeyboard_arrow_down');
        this.allJobsBtn = page.frameLocator('#openroles iframe').locator('text=All Jobs');
        this.dataAnalystBtn = page.frameLocator('#openroles iframe').locator('text=Data Analyst Remote keyboard_arrow_right >> mat-icon[role="img"]');
        this.firstnameInput = page.frameLocator('#grnhse_iframe').locator('input[name="job_application\\[first_name\\]"]');
        this.lastnameInput = page.frameLocator('#grnhse_iframe').locator('input[name="job_application\\[last_name\\]"]');
        this.emailInput = page.frameLocator('#grnhse_iframe').locator('input[name="job_application\\[email\\]"]');
        this.phoneInput = page.frameLocator('#grnhse_iframe').locator('input[name="job_application\\[phone\\]"]');
        this.manualResumeBtn = page.frameLocator('#grnhse_iframe').locator('#resume_fieldset >> text=or enter manually');
        this.pasteTextField = page.frameLocator('#grnhse_iframe').locator('textarea[name="job_application\\[resume_text\\]"]');
        this.resumeInput = page.frameLocator('#grnhse_iframe').locator('textarea[name="job_application\\[resume_text\\]"]');
        this.securityClearanceBtn = page.frameLocator('#grnhse_iframe').locator('text=Security Clearance * Please select Please selectNone Interim Public Trust Public >> b[role="presentation"]');
        this.securityClearanceSelect = page.frameLocator('#grnhse_iframe').locator('div[role="option"]:has-text("None")');
        this.salaryRangeBtn = page.frameLocator('#grnhse_iframe').locator('text=What is your target salary range? * Please select Please select50k-60k 60k-70k 7 >> b[role="presentation"]');
        this.salaryInput = page.frameLocator('#grnhse_iframe').locator('div[role="option"]:has-text("100k-110k")');
        this.sponsorshipBtn = page.frameLocator('#grnhse_iframe').locator('#select2-chosen-2');
        this.sponsorshipSelect = page.frameLocator('#grnhse_iframe').locator('div[role="option"]:has-text("No")');
        this.rightToWorkBtn = page.frameLocator('#grnhse_iframe').locator('text=Will you be able to provide verification of your legal right to work in the Unit >> b[role="presentation"]');
        this.rightToWorkSelect = page.frameLocator('#grnhse_iframe').locator('div[role="option"]:has-text("Yes")');
        this.localMetroAreaBtn = page.frameLocator('#grnhse_iframe').locator('text=Are you local to DC metro area? * -- -- Yes No >> b[role="presentation"]');
        this.localMetroAreaSelect = page.frameLocator('#grnhse_iframe').locator('div[role="option"]:has-text("No")');
        this.submitApplication = page.frameLocator('#grnhse_iframe').locator('text=Submit Application');
      
    }
    async fillOutJobForm(firstname, lastname, email, phonenumber) {
       await this.firstnameInput.fill(firstname);
       await this.lastnameInput.fill(lastname);
       await this.emailInput.fill(email);
       await this.phoneInput.fill(phonenumber);
        
    }
    async fillOutResume(resume) {
        await this.resumeInput.fill(resume);   
     }
}