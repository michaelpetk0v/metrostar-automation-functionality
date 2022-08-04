exports.Contact = class Contact {

    constructor(page) {
        this.page = page;
        this.cookiesBtn = page.locator('text=Accept');
        this.contactUsBtn = page.locator('[href="https://www.metrostar.com/contact-us/"]');
        this.nameInput = page.locator('[id="name-997e03ee-df9f-4645-ac6f-2c08f86b62f7"]');
        this.emailInput = page.locator('[id="email-997e03ee-df9f-4645-ac6f-2c08f86b62f7"]');
        this.reasonForContactBtn = page.locator('[id="reason_for_contact_dropdown-997e03ee-df9f-4645-ac6f-2c08f86b62f7"]');
        this.reasonForContactSelect = page.locator('select[name="reason_for_contact_dropdown"]');
        this.giveUsDetailsInput = page.locator('[id="details-997e03ee-df9f-4645-ac6f-2c08f86b62f7"]');
        this.sendMessageBtn = page.locator('[data-reactid=".hbspt-forms-0.5.1"] [type="submit"]');
        this.thankYouPage = page.locator('h2:has-text("thank you")');
    }
    async fillOutContactUsForm(name, email) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        
    }

    async fillOutDetails(details) {
        await this.giveUsDetailsInput.fill(details);

    }
}