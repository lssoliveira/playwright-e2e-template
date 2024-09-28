import { Locator, Page } from "@playwright/test";

export class ScoreElements {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getSearchButton(): Locator {
        return this.page.locator('button[class*="site-header_search"]');
    }

    getSearchField(): Locator {
        return this.page.locator('input[class*="new-search-widget_input"]');
    }

    getSearchResultByName(searchTerm: string): Locator {
        return this.page.locator('div[class*="new-search-widget_entity_item_name"]', { hasText: searchTerm });
    }

    getTitleText(): Locator {
        return this.page.locator('h1[class="mega-header-module-entity-name"]');
    }
}