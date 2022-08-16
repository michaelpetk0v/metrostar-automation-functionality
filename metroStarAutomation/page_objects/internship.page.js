exports.Internship = class Internship {

    constructor(page) {
        this.page = page;
        this.cookiesBtn = page.locator('text=Accept');
        this.careersBtn = page.locator('//span[text()="careers"]');
        this.internshipsBtn = page.locator('[href="https://www.metrostar.com/internships/"]');
        this.nameInput = page.locator('[id="firstname-ca7882ff-67aa-4578-aea9-9415f1a74278"]');
        this.emailInput = page.locator('[id="email-ca7882ff-67aa-4578-aea9-9415f1a74278"]');
        this.subscribeBtn = page.locator('text=subscribe');
        this.thankYouPage = page.locator('h2:has-text("thank you")');
    }
    async fillOutChartWithUsForm(name, email) {
       await this.nameInput.fill(name);
       await this.emailInput.fill(email);  
    }
}