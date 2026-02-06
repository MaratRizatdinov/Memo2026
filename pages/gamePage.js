export const gamePage = (appElement, state) => {
  appElement.innerHTML = `
     <div class="modal modal_start">Это страница игры ${state.gamevalue} уровень</div>`;
};
