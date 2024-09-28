import { test, expect } from '@playwright/test';
import { ScoresPage } from '../pages/scores-page';

test('Verify SC Internacional Page', async ({ page }) => {
	const scoresPage = new ScoresPage(page);
	await scoresPage.goto();
	await scoresPage.search('SC internacional');
	await scoresPage.selectSearchResult('Internacional');
	await scoresPage.validateTitle('Resultados ao vivo SC Internacional')
});
