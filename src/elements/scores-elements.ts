import { Locator, Page } from '@playwright/test';

export class ScoreElements {
  readonly page: Page;

  private readonly selectors = {
    changeRegionButtonByText: '.website-us-popup_button__ohNt3',
    searchButton: 'button[class*="site-header_search"]',
    searchField: 'input[class*="new-search-widget_input"]',
    searchResultByItem: 'div[class*="new-search-widget_entity_item_name"]',
    pageTitle: 'h1[class="mega-header-module-entity-name"]',
    playerProfileRole: 'div[class*="athlete-widget_profile_role"]'
  } as const;

  constructor(page: Page) {
    this.page = page;
  }

  changeRegionButtonByText(value: string): Locator {
    return this.page.locator(this.selectors.changeRegionButtonByText, {
      hasText: value,
    });
  }

  get searchButton(): Locator {
    return this.page.locator(this.selectors.searchButton);
  }

  get searchField(): Locator {
    return this.page.locator(this.selectors.searchField);
  }

  searchResultByItem(searchTerm: string): Locator {
    return this.page.locator(this.selectors.searchResultByItem, {
      hasText: new RegExp(`^${searchTerm}$`),
    });
  }

  get pageTitle(): Locator {
    return this.page.locator(this.selectors.pageTitle);
  }

  get playerProfileRole(): Locator {
    return this.page.locator(this.selectors.playerProfileRole);
  }
}
