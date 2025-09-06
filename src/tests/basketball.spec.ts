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

test.describe('BASKETBALL @basketball', () => {
  test('VERIFIED BASKETBALL PLAYER ROLE @basketballPlayer', async () => {
    await test.step('NAVIGATE TO BASKETBALL PLAYER PAGE', async () => {
      await scoresPage.mainSearch(scoresData.mainSearch.JAMES_HARDEN);
      await scoresPage.selectSearchResult(scoresData.mainResult.JAMES_HARDEN);
    });

    await test.step('VALIDATE BASKETBALL PLAYER ROLE', async () => {
      if (!process.env.CI) {
        await expect(scoresPage.getPlayerProfileRoleText()).toHaveText('Ala Armador');
      } else {
        await expect(scoresPage.getTitleText()).toHaveText('Shooting Guard');
      }
    });
  });
});
