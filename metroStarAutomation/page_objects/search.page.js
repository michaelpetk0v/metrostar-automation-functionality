exports.Search = class Search {

    constructor(page) {
        this.page = page;
        this.cookiesBtn = page.locator('text=Accept');
        this.searchBtn = page.locator('a.fusion-main-menu-icon');
        this.searchInput = page.locator('[class="fusion-overlay-search"] [type="search"]');
        this.contactUsResultBtn = page.locator('[href="https://www.metrostar.com/contact-us/"] [class="ss360-highlight"]');
        this.nameInput = page.locator('[id="name-997e03ee-df9f-4645-ac6f-2c08f86b62f7"]');
        this.emailInput = page.locator('[id="email-997e03ee-df9f-4645-ac6f-2c08f86b62f7"]');
        this.reasonForContactBtn = page.locator('[id="reason_for_contact_dropdown-997e03ee-df9f-4645-ac6f-2c08f86b62f7"]');
        this.reasonForContactSelect = page.locator('select[name="reason_for_contact_dropdown"]');
        this.giveUsTheDetailsInput = page.locator('[id="details-997e03ee-df9f-4645-ac6f-2c08f86b62f7"]');
        this.submitBtn = page.locator('.hs-submit [type="submit"]');
    }
    async form(name, email) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        
    }

    async details(details) {
        await this.giveUsTheDetailsInput.fill(details);
    }

}