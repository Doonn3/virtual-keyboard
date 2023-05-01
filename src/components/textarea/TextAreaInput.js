import VirtualKeyboardEvent from '../../Events/VirtualKeyboardEvent';
import BaseCommand from './Command/BaseCommand';
import './style.scss';

class TextAreaInput {
  #command;

  #isFocus = true;

  init() {
    const root = document.querySelector('.text-area');
    this.#command = new BaseCommand(root);
    root.addEventListener('input', this.handlerTextArea);
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

  #handlerVirtualKeyboard = (data) => {
    if (this.#command instanceof BaseCommand) {
      this.#command.execute(data);
    }
  };

  handlerTextArea = (event) => {
    if (this.#isFocus) return;
    alert('s');
    if (event instanceof InputEvent) return;

    if (this.#command instanceof BaseCommand) {
      this.#command.execute(event);
    }
  };

  #handlerFocus = () => {
    this.#isFocus = true;
  };

  #handlerFocusout = () => {
    this.#isFocus = false;
  };
}

export default TextAreaInput;
