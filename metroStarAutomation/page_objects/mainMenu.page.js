exports.MainMenu = class MainMenu {
  
    constructor(page) {
      this.page = page;
      this.ourWorkMenuBtn = page.locator(`[data-item-id='177'] .menu-text`);
      this.servicesSolutionsSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-982 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.rdSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-983 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.caseStudiesSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-1143 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.contractVehiclesSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-249 fusion-dropdown-submenu'] .fusion-background-highlight`);
      this.industiesMenuBtn = page.locator(`[data-item-id='178'] .menu-text`);
      this.civilianSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-229 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.defenseSubMenuBtn = page.locator(`.fusion-dropdown-submenu.menu-item.menu-item-576.menu-item-object-page.menu-item-type-post_type > .fusion-background-highlight`);
      this.healthSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-573 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.homelandSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-567 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.intelligenceSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-1190 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.ideasMenuBtn = page.locator(`[data-item-id='179'] .menu-text`);
      this.blogSubMenuBtn = page.locator(`[class='menu-item menu-item-type-custom menu-item-object-custom menu-item-44 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.careersMunuBtn = page.locator(`[data-item-id='180'] .menu-text`);
      this.joinusSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-129 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.internshipSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-432 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.aboutMenuBtn = page.locator(`[data-item-id='181'] .menu-text`);
      this.companySubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-109 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.cultureSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-196 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.leadershipSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-658 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.newsEventsSubMenuBtn = page.locator(`[class='menu-item menu-item-type-post_type menu-item-object-page menu-item-173 fusion-dropdown-submenu'] .fusion-background-highlight span`);
      this.cookiesAcceptBtn = page.locator(`a#hs-eu-confirmation-button`);
    }
}
