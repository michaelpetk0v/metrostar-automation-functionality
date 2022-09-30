const { test, expect } = require('@playwright/test');
const { Links } = require('../page_objects/links.page');
let links;

test.beforeEach(async ({ page }) => {
    links = new Links(page);
    await page.goto('https://www.metrostar.com/');
  });
  
  test.describe('Social network links functionality tests', () => {
    test('User should get redirected to Metrostar Git Hub page upon click to link', async ({ context, page }) => {
      // Click Git Hub button.
      const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
         links.githubLinkBtn.click()
        ])
      await expect(newPage).toHaveURL('https://github.com/MetroStar');
    })

    test('User should get redirected to Metrostar Spotify page upon click to link', async ({ context, page }) => {
      // Click Spotify button.
      const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
         links.spotifyLinkBtn.click()
        ])
      await expect(newPage).toHaveURL('https://open.spotify.com/show/7z6G0bjpKWJJpicvOFuE3M?si=6befbc1ce9ef433f&nd=1');
    })

    test('User should get redirected to Metrostar Twitter page upon click to link', async ({ context, page }) => {
      // Click twitter button.
      const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
        links.twitterLinkBtn.click()
      ])
     await expect(newPage).toHaveURL('https://twitter.com/MetroStarSystem');
    })

    test('User should get redirected to Metrostar Instagram page upon click to link', async ({ context, page }) => {
      // Click Instagram button.
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        links.instagramLinkBtn.click()
      ])
      await expect(newPage).toHaveURL('https://www.instagram.com/metrostarsystems/');
    })

    test('User should get redirected to Metrostar Linkedin page upon click to link', async ({ context, page }) => {
      // Click Linkedin button. 
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        links.linkedinLinkBtn.click()
      ])
     await expect(newPage).toHaveURL('https://www.linkedin.com/company/metrostar-systems');
    })
})