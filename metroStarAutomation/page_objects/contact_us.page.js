exports.ContactPage = class ContactPage {
  
    constructor(page) {
        this.page = page;
        this.contactUsBtn = page.locator(`[data-classes] .fusion-background-highlight`);
        this.contactUsDirectlyText = page.locator(`[class='fusion-text fusion-text-3'] h2`);
        this.nameInput = page.locator(`input[name='name']`);
        this.emailInput = page.locator(`input[name='email']`);
        this.reasonMenuDropdownButton = page.locator(`select[name="reason_for_contact_dropdown"]`);
        this.detailsInput = page.locator(`textarea[name='details']`);
        this.sendMessageBtn = page.locator(`input[value='send message']`);
        this.cookiesAcceptBtn = page.locator(`a#hs-eu-confirmation-button`);
        this.reasonMenuDropdownBtn = page.locator(`[placeholder='Enter your Reason For Contact'] span:nth-of-type(1)`);
        this.thankYouText = page.locator(`.fusion-text.fusion-text-1 > p:nth-of-type(1)`);
    };

    async fillOutContactUsForm(name, email, details) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.detailsInput.fill(details);
        await this.sendMessageBtn.click();
    }
};