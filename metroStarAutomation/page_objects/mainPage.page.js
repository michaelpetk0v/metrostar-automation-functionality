exports.MainPage = class MainPage {
   
    constructor(page) {
        this.page = page;
        this.appliedIntelligenceBtn = page.locator(`[class='fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-0 fusion_builder_column_inner_1_3 1_3 fusion-flex-column fusion-flex-align-self-stretch'] .fusion-flex-justify-content-flex-start`);
        this.devSecOpsBtn = page.locator(`[class='fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-1 fusion_builder_column_inner_1_3 1_3 fusion-flex-column fusion-flex-align-self-stretch'] .fusion-flex-justify-content-flex-start`);
        this.humanCenteredDesignBtn = page.locator(`[class='fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-2 fusion_builder_column_inner_1_3 1_3 fusion-flex-column fusion-flex-align-self-stretch'] .fusion-flex-justify-content-flex-start`);
        this.cloudBtn = page.locator(`[class='fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-3 fusion_builder_column_inner_1_3 1_3 fusion-flex-column fusion-flex-align-self-stretch'] .fusion-flex-justify-content-flex-start`);
        this.cybersecurityBtn = page.locator(`[class='fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-4 fusion_builder_column_inner_1_3 1_3 fusion-flex-column fusion-flex-align-self-stretch'] .fusion-flex-justify-content-flex-start`);
        this.enterpriseItBtn = page.locator(`[class='fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-5 fusion_builder_column_inner_1_3 1_3 fusion-flex-column fusion-flex-align-self-stretch'] .fusion-flex-justify-content-flex-start`);
        this.learnMoreBtn = page.locator(`[class] .fusion-flex-justify-content-center div:nth-of-type(1) [href='http\:\/\/www\.metrostar\.com\/services\/']`);
        this.moreFeaturedBtn = page.locator(`[class='fusion-layout-column fusion_builder_column fusion-builder-column-18 fusion_builder_column_1_1 1_1 fusion-flex-column fusion-flex-align-self-center fusion-no-small-visibility fusion-no-medium-visibility'] [href]`);
        this.findACareerYouLoveBtn = page.locator(`[class='fusion-layout-column fusion_builder_column fusion-builder-column-24 fusion_builder_column_1_2 1_2 fusion-flex-column'] div:nth-of-type(2) [href]`);
        this.cookiesAcceptBtn = page.locator(`a#hs-eu-confirmation-button`);

    }
}