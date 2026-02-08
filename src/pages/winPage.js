export const winPage = (appElement, state) => {
  console.log(state);
  appElement.innerHTML = `
    <div class="modal modal_win">
       <img src="static/img/celebration.svg" alt="" class="modal__image">   
      <h1 class="modal__title modal__title_win">Вы выиграли!</h1>   
      <div class="modal__text">Затраченное время:</div>   
      <div class="modal__time">01.20</div>
      <div class="modal__button modal__button_win button">Играть снова</div>
    </div>
    `;
};
