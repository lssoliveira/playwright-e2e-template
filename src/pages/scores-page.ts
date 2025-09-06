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
    await this.page.goto('/');
    if (process.env.CI) await this.changeRegion('yes');
  }

  async changeRegion(value: string) {
    await this.scoreElements.changeRegionButtonByText(value).click();
  }

  async clickSearchButton() {
    await this.scoreElements.searchButton.click();
  }

  async fillSearchField(searchTerm: string) {
    await this.scoreElements.searchField.fill(searchTerm);
  }

  async mainSearch(searchTerm: string) {
    await this.clickSearchButton();
    await this.fillSearchField(searchTerm);
  }

  async selectSearchResult(searchTerm: string) {
    await this.scoreElements.searchResultByItem(searchTerm).click();
  }

  getTitleText() {
    return this.scoreElements.pageTitle;
  }

  getPlayerProfileRoleText() {
    return this.scoreElements.playerProfileRole;
  }

}
