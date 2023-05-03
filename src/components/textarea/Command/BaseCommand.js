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
    if (!(method instanceof KeyboardEvent) && !(typeof method === 'object')) return;
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

      case 'Enter':
        this.#enterCommand();
        break;
      default:
        break;
    }
  }

  #cursorPosition = null;

  #charAdd(char) {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    this.#cursorPosition = this.input.selectionStart;
    const textBeforeCursor = this.input.value.slice(0, this.#cursorPosition);
    const textAfterCursor = this.input.value.slice(this.#cursorPosition);
    this.input.value = textBeforeCursor + char + textAfterCursor;
    this.input.setSelectionRange(this.#cursorPosition + 1, this.#cursorPosition + 1);
  }

  #enterCommand() {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const cursorPosition = this.input.selectionStart;
    const textBeforeCursor = this.input.value.slice(0, cursorPosition);
    const textAfterCursor = this.input.value.slice(cursorPosition);
    this.input.value = `${textBeforeCursor}\n${textAfterCursor}`;
    this.input.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }

  #backSpaceCommand() {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const cursorPositionStart = this.input.selectionStart;
    const cursorPositionEnd = this.input.selectionEnd;
    const textBeforeCursor = this.input.value.slice(0, cursorPositionStart);
    const textAfterCursor = this.input.value.slice(cursorPositionEnd);
    if (cursorPositionStart === cursorPositionEnd) {
      this.input.value = textBeforeCursor.slice(0, -1) + textAfterCursor;
      this.input.setSelectionRange(cursorPositionStart - 1, cursorPositionStart - 1);
    } else {
      this.input.value = textBeforeCursor + textAfterCursor;
      this.input.setSelectionRange(cursorPositionStart, cursorPositionStart);
    }
  }

  #tabCommand() {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const cursorPosition = this.input.selectionStart;
    const textBeforeCursor = this.input.value.slice(0, cursorPosition);
    const textAfterCursor = this.input.value.slice(cursorPosition);
    this.input.value = `${textBeforeCursor}    ${textAfterCursor}`;
    this.input.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
  }

  #deleteCommand() {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const cursorPositionStart = this.input.selectionStart;
    const cursorPositionEnd = this.input.selectionEnd;
    const textBeforeCursor = this.input.value.slice(0, cursorPositionStart);
    const textAfterCursor = this.input.value.slice(cursorPositionEnd);
    if (cursorPositionStart === cursorPositionEnd) {
        this.input.value = textBeforeCursor + textAfterCursor.slice(1);
        this.input.setSelectionRange(cursorPositionStart, cursorPositionStart);
    } else {
        this.input.value = textBeforeCursor + textAfterCursor;
        this.input.setSelectionRange(cursorPositionStart, cursorPositionStart);
    }
  }
}

export default BaseCommand;
