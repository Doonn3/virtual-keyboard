import BaseCommand from './Command/BaseCommand';

class TextAreaInput {
  #command;
  #isFocus = false;
  init() {
    const root = document.querySelector('.text');
    this.#command = new BaseCommand(root);
    root.addEventListener('input', this.handlerTextArea);
    root.addEventListener('focus', this.#handlerFocus);
    root.addEventListener('focusout', this.#handlerFocusout);
  }

  render() {
    return `<textarea class="text"></textarea>`;
  }

  handlerTextArea = (event) => {
    if (this.#isFocus) return;
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
