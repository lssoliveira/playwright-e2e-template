import { expect, test } from '@playwright/test';
import { ScoresPage } from '../pages/scores-page';
import { ScoreData } from '../support/data/score-data';

let scoresPage: ScoresPage;
let scoresData: ScoreData;

test.beforeEach(async ({ page }) => {
  scoresPage = new ScoresPage(page);
  scoresData = new ScoreData();
  await scoresPage.goto();
});

test.describe('FOOTBALL @football', () => {
  test('VERIFIED FOOTBALL TEAM PAGE @footballTeam', async () => {
    await test.step('NAVIGATE TO FOOTBALL TEAM PAGE', async () => {
      await scoresPage.mainSearch(scoresData.mainSearch.SC_INTERNACIONAL);
      await scoresPage.selectSearchResult(scoresData.mainResult.INTERNACIONAL);
    });

    await test.step('VALIDATE FOOTBALL TEAM PAGE TITLE', async () => {
      if (!process.env.CI) {
        await expect(scoresPage.getTitleText()).toHaveText('Resultados ao vivo SC Internacional');
      } else {
        await expect(scoresPage.getTitleText()).toHaveText('SC Internacional: Livescore');
      }
    });
  });
});
