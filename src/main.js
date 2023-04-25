import KeyBoardController from './components/keyboard/KeyBoardController';
import './main.ejs';
import './main.scss';

document.body.insertAdjacentHTML('beforeend', '<div id="app">Container</div>');

export const app = document.querySelector('#app');
const keyboard = new KeyBoardController();

let tempKey = null;
const onKeyDown = (event) => {
  if (!(event instanceof KeyboardEvent)) return;
  if (event.key === 'Tab') event.preventDefault();
  if (tempKey === event.key) return;
  keyboard.handlerDownKey(event);
  tempKey = event.key;
};

const onKeyUp = (event) => {
  if (!(event instanceof KeyboardEvent)) return;
  keyboard.handlerUpKey(event);
  tempKey = null;
};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

keyboard.init();
