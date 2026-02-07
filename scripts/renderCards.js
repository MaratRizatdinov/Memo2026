export const renderCards = (cardField, state) => {
  const cardDeck = state.gameCards;
  let cardsContent = '';

  for (const card of cardDeck) {
    if (card.visible === 'open') {
      cardsContent += `
    <div class="card card_open" data-card =${card.name}>
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
      cardsContent += `<div class="card card_close" data-card =${card.name}> <img src="./img/рубашка.svg" alt="рубашка"></div>`;
    }
  }
  cardField.innerHTML = cardsContent;

  const closedCards = document.querySelectorAll('.card_close');
  for (const card of closedCards) {
    card.addEventListener('click', () => console.log('object'));
  }
};
