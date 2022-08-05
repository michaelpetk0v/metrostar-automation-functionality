exports.SearchBar = class SearchBar {
   
    constructor(page) {
        this.page = page;
        this.searchBtn = page.locator("[data-classes] > [aria-label]");
        this.searchBarInput = page.locator("[aria-label] > div:nth-of-type(1) .s");
        this.searchArray = page.locator("li > .ss360-n-section.ss360-suggests__wrap")
        this.searchBtn = page.locator("[data-classes] > [aria-label]");
        this.searchBtn = page.locator("[data-classes] > [aria-label]");
        this.searchBtn = page.locator("[data-classes] > [aria-label]");
        this.searchBtn = page.locator("[data-classes] > [aria-label]");
        this.searchBtn = page.locator("[data-classes] > [aria-label]");
        this.cookiesAcceptBtn = page.locator(`a#hs-eu-confirmation-button`);
    }
       async searchBarCheck(input) {
            await this.searchBtn.click();
            await this.searchBarInput.fill(input)
            await this.searchArray.forEach(async element => {
                  let text = await element.innerText()
                  console.log(text)
                });
            // for (let i = 0; i < this.searchArray.length; i++) {
            //    const element = await this.searchArray[i]
            //    let text = await element.innerText()
            //    console.log(text)
            //    }
            }

    }
