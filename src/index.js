import './style.css';
import { appRouter } from './scripts/appRouter.js';
import { initState } from './constatnts/initState.js';

document.body.innerHTML = `<div class="app"></div>`;

const state = initState;
appRouter(state);
