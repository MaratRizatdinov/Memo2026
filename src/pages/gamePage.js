import { renderCards } from '../scripts/renderCards.js';
import { appRouter } from '../index.js';

export const gamePage = (appElement, state) => {
  const level =
    state.gamevalue === '1'
      ? 'easy'
      : state.gamevalue === '2'
        ? 'medium'
        : 'hard';

  appElement.innerHTML = `
      <div class="gamefield">
        <div class="gamefield__header">
          <div class="gamefield__timer">00.00</div>
          <div class="gamefield__button button">Начать заново</div>
        </div>
        <div class="gamefield__container">
          <div class="gamefield__cards gamefield__cards_${level}"></div> 
        </div> 
      </div>     
     `;

  const resetButton = document.querySelector('.gamefield__button');
  resetButton.addEventListener('click', () => {
    if (state.gameTimerId) clearInterval(state.gameTimerId);
    state = {
      gameStatus: 'start',
      gamevalue: '',
      gameCards: [],
      gameClickedCards: [],
      gameTimer: 0,
      gameTimerId: null,
    };
    appRouter(state);
  });

  const cardField = document.querySelector('.gamefield__cards');
  const timerElement = document.querySelector('.gamefield__timer');

  renderCards(cardField, state);
  setTimeout(() => {
    const cardDeck = state.gameCards;

    state.gameCards = cardDeck.map((card) =>
      Object.assign(card, { visible: 'close' }),
    );
    state.gameTimer = Date.now();
    const timerId = setInterval(() => {
      const time = Date.now() - state.gameTimer;
      const fmt = (x) =>
        new Date(x).toLocaleString('en-GB', {
          minute: '2-digit',
          second: '2-digit',
        });
      timerElement.innerHTML = fmt(time).replace(':', '.');      
    }, 1000);
    state.gameTimerId = timerId;

    renderCards(cardField, state);
  }, 5000);
};
