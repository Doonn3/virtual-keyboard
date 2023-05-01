import KeyBoardController from './components/keyboard/KeyBoardController';
import TextAreaInput from './components/textarea/TextAreaInput';
import Title from './components/title/Title';
import './main.ejs';
import './main.scss';

document.body.insertAdjacentHTML('beforeend', '<div id="app"></div>');

export const app = document.querySelector('#app');
const textArea = new TextAreaInput();
app.insertAdjacentHTML('beforeend', textArea.render());
textArea.init();

const keyboard = new KeyBoardController();
app.insertAdjacentHTML('beforeend', Title('Смена Языка Шифт Альт'));

let tempKey = null;
const onKeyDown = (event) => {
  if (!(event instanceof KeyboardEvent)) return;
  if (event.key === 'Tab') event.preventDefault();
  textArea.handlerTextArea(event);
  if (tempKey === event.key) return;
  keyboard.handlerDownKey(event);

  tempKey = event.key;
};

const onKeyUp = (event) => {
  if (!(event instanceof KeyboardEvent)) return;
  keyboard.handlerUpKey(event);
  tempKey = null;
};

const onInput = (event) => {
  console.log('AAAAAAAAAAAAA');
};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);
// window.addEventListener('input', onInput);


keyboard.init();
