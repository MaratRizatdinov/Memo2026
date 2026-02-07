export const gamePage = (appElement, state) => {
  appElement.innerHTML = `
      <div class="gamefield">
        <div class="gamefield__header">
          <div class="gamefield__timer">00.00</div>
          <div class="gamefield__button button">Начать заново</div>
        </div>
        <div class="gamefield__cards"></div> 
      </div>     
     `;
  const cardField = document.querySelector('.gamefield__cards');
  let cardsContent = '';
  for (let i = 0; i < 36; i++) {
    cardsContent +=
      '<div class="card"> <img src="./img/рубашка.svg" alt="рубашка"></div>';
  }
  cardField.innerHTML = cardsContent;
};
