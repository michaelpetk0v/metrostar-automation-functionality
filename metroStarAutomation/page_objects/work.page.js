exports.Work = class Work {

    constructor(page) {
        this.page = page;
        this.cookiesBtn = page.locator('text=Accept');
        this.industriesBtn = page.locator('[id="menu-item-178"] [href="#"] [class="menu-text"]');
        this.intelligensBtn = page.locator('[id="menu-item-1190"] [class="fusion-background-highlight"]');
        this.workWithUsBtn = page.locator('a:has-text("work with us")');
        this.nameInput = page.locator('[id="firstname-34e3f8c1-de52-4214-9161-0fd9723e857f"]');
        this.emailInput = page.locator('[id="email-34e3f8c1-de52-4214-9161-0fd9723e857f"]');
        this.healthBtn = page.locator('[id="select_industry2-34e3f8c1-de52-4214-9161-0fd9723e857f"]');
        this.yourRequestField = page.locator('[id="multi_line_text_area-34e3f8c1-de52-4214-9161-0fd9723e857f"]');
        this.submitBtn = page.locator('[class="actions"] [type="submit"]');
    }
    async form(name, email) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        
    }

}