import { expect, type Page } from '@playwright/test';
import { ScoreElements } from '../elements/scores-elements';

export class ScoresPage {
	readonly page: Page;
	readonly scoreElements: ScoreElements;

	constructor(page: Page) {
		this.page = page;
		this.scoreElements = new ScoreElements(page);
	}

	async goto() {
		await this.page.goto('/')
		if (process.env.CI)
			await this.changeRegion('no')
	}

	async changeRegion(value: string) {
		await this.scoreElements.getChangeRegion(value).click();
	}

	async clickSearchButton() {
		await this.scoreElements.getSearchButton().click();
	}

	async fillSearchField(searchTerm: string) {
		await this.scoreElements.getSearchField().fill(searchTerm);
	}

	async mainSearch(searchTerm: string) {
		await this.clickSearchButton();
		await this.fillSearchField(searchTerm);
	}

	async selectSearchResult(searchTerm: string) {
		await this.scoreElements.getSearchResultByName(searchTerm).click();
	}

	async validateTitle(title: string) {
		await expect(this.scoreElements.getTitleText()).toHaveText(title);
	}
}