exports.LinksPage = class LinksPage {
   
    constructor(page) {
        this.page = page;
        this.githubBtn = page.locator("[class='fusion-layout-column fusion_builder_column fusion-builder-column-28 fusion_builder_column_1_2 1_2 fusion-flex-column fusion-flex-align-self-flex-start footer-socials'] [href='https\:\/\/github\.com\/MetroStar']");
        this.spotifyBtn = page.locator("[class='fusion-layout-column fusion_builder_column fusion-builder-column-28 fusion_builder_column_1_2 1_2 fusion-flex-column fusion-flex-align-self-flex-start footer-socials'] [href='https\:\/\/open\.spotify\.com\/show\/7z6G0bjpKWJJpicvOFuE3M\?si\=6befbc1ce9ef433f']");
        this.twitterBtn = page.locator("[class='fusion-layout-column fusion_builder_column fusion-builder-column-28 fusion_builder_column_1_2 1_2 fusion-flex-column fusion-flex-align-self-flex-start footer-socials'] [href='https\:\/\/twitter\.com\/MetroStarSystem']");
        this.instagramBtn = page.locator("[class='fusion-layout-column fusion_builder_column fusion-builder-column-28 fusion_builder_column_1_2 1_2 fusion-flex-column fusion-flex-align-self-flex-start footer-socials'] [href='https\:\/\/www\.instagram\.com\/metrostarsystems\/']");
        this.linkedinBtn = page.locator(".fusion-column-wrapper.fusion-content-layout-column.fusion-flex-justify-content-flex-start a[title='LinkedIn']");
        this.cookiesAcceptBtn = page.locator(`a#hs-eu-confirmation-button`);
      }
   }

