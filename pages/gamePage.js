import { renderCards } from "../scripts/renderCards.js";

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

  const cardField = document.querySelector('.gamefield__cards');
  
  renderCards(cardField, state);
  setTimeout(() => {
    const cardDeck = state.gameCards;
    state.gameCards = cardDeck.map((card) => (card.visible = 'close'));
    renderCards(cardField, state);
  }, 1000);
};
