import { appRouter } from "../index.js";
export const selectPage = (appElement, state) => {
  appElement.innerHTML = `
     <div class="modal modal_start">
        <h1 class="modal__title">Выбери сложность</h1>
        <div class="modal__checkbox">
          <input
            class="modal__input"
            type="radio"
            id="radio1"
            name="radios"
            value="1"
            checked
          />
          <label class="modal__label" for="radio1">1</label>
          <input
            class="modal__input"
            type="radio"
            id="radio2"
            name="radios"
            value="2"
          />
          <label class="modal__label" for="radio2">2</label>
          <input
            class="modal__input"
            type="radio"
            id="radio3"
            name="radios"
            value="3"
          />
          <label class="modal__label" for="radio3">3</label>
        </div>
        <div class="modal__button">Старт</div>
      </div>
`;

  const startButtonElement = document.querySelector(".modal__button");

  startButtonElement.addEventListener("click", () => {
    const inputElements = document.querySelectorAll(".modal__input");

    for (const inputElement of inputElements) {
      if (!inputElement.checked) continue;
      state.gamevalue = inputElement.value;
      state.gameStatus = "game";
      appRouter(appElement, state);
      break;
    }    
  });
};
