class BaseCommand {
  #methods = ['Backspace', 'Delete', 'Enter', 'Tab'];
  #ignored = [
    'ShiftLeft',
    'ShiftRight',
    'CapsLock',
    'ControlLeft',
    'ControlRight',
    'AltLeft',
    'AltRight',
    'MetaLeft',
    'MetaRight',
  ];
  constructor(input) {
    this.input = input;
  }

  execute(method) {
    if (!(method instanceof KeyboardEvent)) return;
    const { key, code } = method;
    if (this.#ignored.includes(code)) return;

    const findMethod = this.#methods.find((elem) => elem === code);

    if (findMethod) {
      this.#matchCommand(findMethod);
    } else {
      this.#charAdd(key);
    }
  }

  #matchCommand(command) {
    switch (command) {
      case 'Backspace':
        this.#backSpaceCommand();
        break;
      case 'Tab':
        this.#tabCommand();
        break;
      case 'Delete':
        this.#deleteCommand();
        break;
      default:
        break;
    }
  }

  #charAdd(char) {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const cursorPosition = this.input.selectionStart;
    const textBeforeCursor = this.input.value.slice(0, cursorPosition);
    const textAfterCursor = this.input.value.slice(cursorPosition);
    this.input.value = textBeforeCursor + char + textAfterCursor;
    this.input.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }

  #backSpaceCommand() {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const cursorPosition = this.input.selectionStart;
    const textBeforeCursor = this.input.value.slice(0, cursorPosition);
    const textAfterCursor = this.input.value.slice(cursorPosition);
    this.input.value = textBeforeCursor.slice(0, -1) + textAfterCursor;
    this.input.setSelectionRange(cursorPosition - 1, cursorPosition);
  }

  #tabCommand() {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const cursorPosition = this.input.selectionStart;
    const textBeforeCursor = this.input.value.slice(0, cursorPosition);
    const textAfterCursor = this.input.value.slice(cursorPosition);
    this.input.value = textBeforeCursor + '  ' + textAfterCursor;
    this.input.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }

  #deleteCommand() {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const cursorPosition = this.input.selectionStart;
    const textBeforeCursor = this.input.value.slice(0, cursorPosition);
    const textAfterCursor = this.input.value.slice(cursorPosition);
    this.input.value = textBeforeCursor + textAfterCursor.slice(1);
    this.input.setSelectionRange(cursorPosition, cursorPosition);
  }
}

export default BaseCommand;
