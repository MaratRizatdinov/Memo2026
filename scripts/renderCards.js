export const renderCards = (cardField, state) => {
  console.log(state);
  const cardDeck = state.gameCards;
  let cardsContent = '';

  for (const card of cardDeck) {
    if (card.visible === 'open') {
      cardsContent += `
    <div class="card card_open" data-card =${card.name} data-id =${card.id}>
      <div class="card__top">
        ${card.value} 
        <img src=${card.img} alt="масть" class="card__image ${card.value === '10' ? 'card__image_ten' : ''}">
      </div>      
      <img src=${card.img} alt="масть">
      <div class="card__bottom">
        ${card.value}
        <img src=${card.img} alt="масть" class="card__image ${card.value === '10' ? 'card__image_ten' : ''}">
      </div>
    </div> `;
    } else {
      cardsContent += `<div class="card card_close" data-card =${card.name} data-id =${card.id}> <img src="./img/рубашка.svg" alt="рубашка"></div>`;
    }
  }
  cardField.innerHTML = cardsContent;

  const closedCards = document.querySelectorAll('.card_close');

  for (const card of closedCards) {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const clickedCards = state.gameClickedCards;
      const maxClickedCardsLength = state.gamevalue * 6;
      const clickedCardIndex = cardDeck.findIndex((card) => card.id === id);
      if (clickedCards.length === maxClickedCardsLength - 1) {
        alert('You win');
      } else if (clickedCards.length % 2 === 0) {
        clickedCards.push(state.gameCards[clickedCardIndex].name);        
        state.gameCards[clickedCardIndex].visible = 'open';
        renderCards(cardField, state);
      } else if (
        clickedCards.at(-1) === state.gameCards[clickedCardIndex].name
      ) {
        clickedCards.push(state.gameCards[clickedCardIndex].name);        
        state.gameCards[clickedCardIndex].visible = 'open';
        renderCards(cardField, state);
      } else {
        alert('You lose');
      }
    });
  }
};
