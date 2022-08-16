exports.Expert = class Expert {

    constructor(page) {
        this.page = page;
        this.cookiesBtn = page.locator('text=Accept');
        this.aboutBtn = page.locator('[id="menu-item-181"] [class="menu-text"]');
        this.companyBtn = page.locator('[id="menu-item-109"] [class="fusion-background-highlight"]');
        this.whatWeDoBtn = page.locator('a:has-text("Explore What We Do")');
        this.letsTalkBtn = page.locator('a:has-text("let’s talk")');
        this.nameInput = page.locator('[id="firstname-2fb024fc-9e78-4f77-8c73-0df00e4a4cef"]');
        this.emailInput = page.locator('[id="email-2fb024fc-9e78-4f77-8c73-0df00e4a4cef"]');
        this.devSecOpsBtn = page.locator('[id="select_capabilities2-2fb024fc-9e78-4f77-8c73-0df00e4a4cef"]');
        this.yourRequestField = page.locator('[id="multi_line_text_area-2fb024fc-9e78-4f77-8c73-0df00e4a4cef"]');
        this.submitBtn = page.locator('.hs-submit [type="submit"]');
        this.contactAnExpertPage = page.locator('text=contact an expert');
    }
    async fillOutContactAnExpertForm(name, email) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
    }
}