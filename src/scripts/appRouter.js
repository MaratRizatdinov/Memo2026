import { gamePage } from "../pages/gamePage";
import { losePage } from "../pages/losePage";
import { selectPage } from "../pages/selectPage";
import { winPage } from "../pages/winPage";

export const appRouter = (state) => {
  const appElement = document.querySelector('.app');

  if (state.gameStatus === 'start') selectPage(appElement, state);
  if (state.gameStatus === 'game') gamePage(appElement, state);
  if (state.gameStatus === 'win') winPage(appElement, state);
  if (state.gameStatus === 'lose') losePage(appElement, state);
};
