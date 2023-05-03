import { arrowKeyCode } from '../../common/utils';
import VirtualKeyboardEvent from '../../Events/VirtualKeyboardEvent';
import BaseCommand from './Command/BaseCommand';
import './style.scss';

class TextAreaInput {
  #command;

  #isFocus = true;

  init() {
    const root = document.querySelector('.text-area');
    this.#command = new BaseCommand(root);
    root.addEventListener('keydown', this.handlerTextArea);
    root.addEventListener('keyup', this.handlerTextAreaUp);
    // root.addEventListener('focus', this.#handlerFocus);
    // root.addEventListener('focusout', this.#handlerFocusout);
    root.focus();
    root.addEventListener('blur', () => {
      root.focus();
    });

    VirtualKeyboardEvent.current.subscribe(this.#handlerVirtualKeyboard);
  }

  render() {
    return '<textarea class="text-area"></textarea>';
  }

  #isArrodData = false;

  #handlerVirtualKeyboard = (data) => {
    if (this.#isArrodData) return;

    if (this.#command instanceof BaseCommand) {
      this.#command.execute(data);
    }
  };

  handlerTextArea = (event) => {
    if (!(event instanceof KeyboardEvent)) return;
    const { code } = event;
    if (arrowKeyCode.includes(code)) {
      this.#isArrodData = true;
      return;
    }

    if (event.key === 'F12') return;

    event.preventDefault();
  };

  handlerTextAreaUp = (event) => {
    this.#isArrodData = false;

    event.preventDefault();
  };

  // #handlerFocus = () => {
  //   this.#isFocus = true;
  // };

  // #handlerFocusout = () => {
  //   this.#isFocus = false;
  // };
}

export default TextAreaInput;
