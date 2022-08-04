const { test, expect } = require('@playwright/test');
const { LinksPage } = require('../page_objects/links.page');
let linksPage;
const metroStarGithubUrl = 'https://github.com/MetroStar';
const metroStarSpotifyUrl = 'https://open.spotify.com/show/7z6G0bjpKWJJpicvOFuE3M?si=6befbc1ce9ef433f&nd=1';
const metroStarTwitterUrl = 'https://twitter.com/MetroStarSystem';
const metroStarInstagramUrl = 'https://www.instagram.com/metrostarsystems/';
const metroStarLinkedinUrl = 'https://www.linkedin.com/company/metrostar-systems';

test.beforeEach(async ({ page }) => {
    linksPage = new LinksPage(page);
    await page.goto('/');
  });
  
  test.describe('Social network links', () => {
    test('Should get redirected to Metrostar Git Hub page upon click on Git Hub button', async ({ context, page }) => {
      // Click Git Hub button.
      const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
         linksPage.githubBtn.click()
        ])
      await expect(newPage).toHaveURL(metroStarGithubUrl);
    })

    test('Should get redirected to Metrostar Spotify page upon click on Spotify button', async ({ context, page }) => {
      // Click Spotify button.
      const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
         linksPage.spotifyBtn.click()
        ])
      await expect(newPage).toHaveURL(metroStarSpotifyUrl);
    })

    test('Should get redirected to Metrostar Twitter page upon click on Twitter button', async ({ context, page }) => {
      // Click twitter button.
      const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
        linksPage.twitterBtn.click()
      ])
     await expect(newPage).toHaveURL(metroStarTwitterUrl);
    })

    test('Should get redirected to Metrostar Instagram page upon click on Instagram button', async ({ context, page }) => {
      // Click Instagram button.
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        linksPage.instagramBtn.click()
      ])
      await expect(newPage).toHaveURL(metroStarInstagramUrl);
    })

    // test('Should get redirected to Metrostar Linkedin page upon click on Linkedin button', async ({ context, page }) => {
    //   // Click Linkedin button. 
    //   const [newPage] = await Promise.all([
    //     context.waitForEvent('page'),
    //     linksPage.linkedinBtn.click()
    //   ])
    //  await expect(newPage).toHaveURL(metroStarLinkedinUrl);
    // })



    
      // test('Should get redirected to Metrostar Git Hub page upon click on Git Hub butto', async ({ context, page }) => {
      //   // Click Git Hub button.
      //   const [newPage] = await context.waitForEvent('page')
      //   linksPage.githubBtn.click()
      //   await expect(newPage).toHaveURL(metroStarGithubUrl);
      // })

      // test('Should get redirected to Metrostar Spotify page upon click on Spotify button', async ({ context, page }) => {
      //   // Click Spotify button.
      //   const [newPage] = await context.waitForEvent('page')
      //   linksPage.spotifyBtn.click()
      //   await expect(newPage).toHaveURL(metroStarSpotifyUrl);
      // })
  
})