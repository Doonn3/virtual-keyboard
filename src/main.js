import { ignorKeyCode } from './common/utils';
import KeyBoardController from './components/keyboard/KeyBoardController';
import TextAreaInput from './components/textarea/TextAreaInput';
import Title from './components/title/Title';
import './main.ejs';
import './main.scss';

document.body.insertAdjacentHTML('beforeend', '<div id="app"></div>');

const app = document.querySelector('#app');
export default app;

const textArea = new TextAreaInput();
app.insertAdjacentHTML('beforeend', textArea.render());
textArea.init();

const keyboard = new KeyBoardController();
app.insertAdjacentHTML('beforeend', keyboard.render());
keyboard.init();

app.insertAdjacentHTML(
  'beforeend',
  Title(`Клавиатура создана в операционной системе Windows
Для переключения языка комбинация: Ctrl + Shift`),
);

const match = ['Tab', 'Shift', 'Alt', 'Meta'];

const onKeyDown = (event) => {
  if (ignorKeyCode.includes(event.code)) {
    event.preventDefault();
  }

  if (!(event instanceof KeyboardEvent)) return;
  if (match.includes(event.key)) event.preventDefault();

  keyboard.handlerDownKey(event);
};

const onKeyUp = (event) => {
  // event.preventDefault();
  if (!(event instanceof KeyboardEvent)) return;
  keyboard.handlerUpKey(event);
};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp, { passive: false });
