import { selectPage } from './pages/selectPage.js';
import { gamePage } from './pages/gamePage.js';
import './style.css';

const bodyElement = document.getElementsByTagName('body')[0];
bodyElement.innerHTML = `<div class="app"></div>`;
console.log(bodyElement);

const appElement = document.querySelector('.app');

const state = {
  gameStatus: 'start',
  gamevalue: '',
  gameCards: [],
  gameClickedCards: [],
};

export const appRouter = (appElement, state) => {
  if (state.gameStatus === 'start') selectPage(appElement, state);
  if (state.gameStatus === 'game') gamePage(appElement, state);
};
appRouter(appElement, state);
