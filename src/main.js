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
Для переключения языка комбинация: Shift + alt или раскладка вашей операционной системы`),
);

const match = ['Tab', 'Shift', 'Alt', 'Meta'];

let tempKey = null;
const onKeyDown = (event) => {
  if (!(event instanceof KeyboardEvent)) return;
  if (match.includes(event.key)) event.preventDefault();
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

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

keyboard.init();
