import KeyBoardView from './KeyBoardView';
import SwitchLanguageModel from './models/SwitchLanguageModel';
import SwitchUpperLowerMode from './models/SwitchUpperLowerModel';

class KeyBoardController {
  #langSwitch = new SwitchLanguageModel();

  #upperCaseSwitch = new SwitchUpperLowerMode();

  #view = new KeyBoardView(this.#upperCaseSwitch);

  init() {
    this.#view.init();
    this.#view.changeLanguage(this.#langSwitch.Language);
  }

  render() {
    return this.#view.render();
  }

  #tempCode = null;

  #pressedKeys = {};

  handlerDownKey(keyInfo) {
    if (!(keyInfo instanceof KeyboardEvent)) return;

    if (this.#tempCode !== keyInfo.code) {
      this.#view.keyIllumination(keyInfo.code);
      this.#pressedKeys[keyInfo.code] = true;

      if (keyInfo.key === 'CapsLock' || keyInfo.key === 'Shift') {
        const isUpperCase = this.#upperCaseSwitch.down(keyInfo.key).IsUpperCase;
        if (isUpperCase) {
          this.#view.upperCase();
          this.#view.isUpprecase = isUpperCase;
        } else {
          this.#view.lowerCase();
        }
      }

      const langSwitch = this.#langSwitch.execute(keyInfo);
      if (langSwitch) {
        this.#view.changeLanguage(this.#langSwitch.Language);
      }
    }

    this.#tempCode = keyInfo.code;

    this.#view.downKey(keyInfo);
  }

  handlerUpKey(keyInfo) {
    if (!(keyInfo instanceof KeyboardEvent)) return;

    if (keyInfo.key === 'CapsLock' || keyInfo.key === 'Shift') {
      const isUpperCase = this.#upperCaseSwitch.up().IsUpperCase;
      if (!isUpperCase) {
        this.#view.lowerCase();
        this.#view.isUpprecase = isUpperCase;
      }
    }

    const code = keyInfo.code;
    delete this.#pressedKeys[keyInfo.code];
    this.#view.keyIlluminationOff(code);
    this.#tempCode = null;
  }
}

export default KeyBoardController;
