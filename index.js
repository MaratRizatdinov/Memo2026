import { selectPage } from './pages/selectPage.js';
import { gamePage } from './pages/gamePage.js';
const appElement = document.querySelector('.app');

const state = {
  gameStatus: 'start',
  gamevalue: '',
  gameCards: [],
};

export const appRouter = (appElement, state) => {
  if (state.gameStatus === 'start') selectPage(appElement, state);
  if (state.gameStatus === 'game') gamePage(appElement, state);
};
appRouter(appElement, state);
