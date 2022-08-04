const { test, expect } = require('@playwright/test');
const { SearchBar } = require('../page_objects/searchBar.page')
let searchBar;

test.beforeEach(async ({ page }) => {
    searchBar = new SearchBar(page);
    await page.goto('/');
  });
  
  test.describe('Search bar test', () => {
    test('Should get search results', async ({ page }) => {
      // Click "Applied Intelligence" button. 
      await searchBar.cookiesAcceptBtn.click()
      await searchBar.searchBtn.click();
            await searchBar.searchBarInput.fill('metro')
            await page.keyboard.press('Enter');
            page.pause()
         
            let searchArray = this.page.locator("li > .ss360-n-section.ss360-suggests__wrap")

            for (let i = 0; i < searchArray.count(); i++) {
               let element = await searchArray.nth(i)
               let text = await element.innerText()
               console.log(text)
               }
     // await searchBar.searchBarCheck('metro')
    })
  })
 