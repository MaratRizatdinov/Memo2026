import { initState } from '../constatnts/initState';
import { appRouter } from '../scripts/appRouter';

export const losePage = (appElement, state) => {
  clearInterval(state.gameTimerId);
  const time = Date.now() - state.gameTimer;
  const fmt = (x) =>
    new Date(x).toLocaleString('en-GB', {
      minute: '2-digit',
      second: '2-digit',
    });
  appElement.innerHTML = `
    <div class="modal modal_win">
       <img src="static/img/dead.svg" alt="" class="modal__image">   
      <h1 class="modal__title modal__title_win">Вы проиграли!</h1>   
      <div class="modal__text">Затраченное время:</div>   
      <div class="modal__time">${fmt(time).replace(':', '.')}</div>
      <div class="modal__button modal__button_win button">Играть снова</div>
    </div>
    `;
  const resetButton = document.querySelector('.modal__button_win');
  resetButton.addEventListener('click', () => {
    clearInterval(state.gameTimerId);
    state = initState;
    appRouter(state);
  });
};
