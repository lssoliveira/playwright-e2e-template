import { test, expect } from '@playwright/test';
import { ScoresPage } from '../pages/scores-page';
import { ScoreData } from '../../config/data/score-data';

test('Verify SC Internacional Page', async ({ page }) => {
  // arange
  const scoresPage = new ScoresPage(page);
  const scoresData = new ScoreData();

  // act
  await scoresPage.goto();
  await scoresPage.mainSearch(scoresData.mainSearch.SC_INTERNACIONAL);
  await scoresPage.selectSearchResult(scoresData.mainResult.INTERNACIONAL);

  // accert
  await scoresPage.validateTitle('Resultados ao vivo SC Internacional');
});
