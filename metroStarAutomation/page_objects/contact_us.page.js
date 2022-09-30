exports.Contact = class Contact {
  
    constructor(page) {
        this.page = page;
        this.contactUsBtn = page.locator(`[data-classes] .fusion-background-highlight`);
        this.contactUsDirectlyHeader = page.locator(`[class='fusion-text fusion-text-3'] h2`);
        this.nameInput = page.locator(`input[name='name']`);
        this.emailInput = page.locator(`input[name='email']`);
        this.reasonMenuDropdownSel = page.locator(`select[name="reason_for_contact_dropdown"]`);
        this.detailsInput = page.locator(`textarea[name='details']`);
        this.sendMessageBtn = page.locator(`input[value='send message']`);
        this.cookiesAcceptBtn = page.locator(`a#hs-eu-confirmation-button`);
        this.reasonMenuDropdownBtn = page.locator(`[placeholder='Enter your Reason For Contact'] span:nth-of-type(1)`);
        this.thankyouText = page.locator(`.fusion-text.fusion-text-1 > p:nth-of-type(1)`);
    };

    async inputForm(name, email, details) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.detailsInput.fill(details);
        await this.sendMessageBtn.click();
    }
};