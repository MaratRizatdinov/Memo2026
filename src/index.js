import { selectPage } from './pages/selectPage.js';
import { gamePage } from './pages/gamePage.js';
import { winPage } from './pages/winPage.js';
import { losePage } from './pages/losePage.js';
import './style.css';

const bodyElement = document.getElementsByTagName('body')[0];
bodyElement.innerHTML = `<div class="app"></div>`;

const state = {
  gameStatus: 'start',
  gamevalue: '',
  gameCards: [],
  gameClickedCards: [],
  gameTimer: 0,
};

export const appRouter = (state) => {
  const appElement = document.querySelector('.app');

  if (state.gameStatus === 'start') selectPage(appElement, state);
  if (state.gameStatus === 'game') gamePage(appElement, state);
  if (state.gameStatus === 'win') winPage(appElement, state);
  if (state.gameStatus === 'lose') losePage(appElement, state);
};
appRouter(state);
