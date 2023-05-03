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

  handlerDownKey(keyInfo) {
    if (!(keyInfo instanceof KeyboardEvent)) return;

    if (this.#tempCode !== keyInfo.code) {
      this.#view.keyIllumination(keyInfo.code);
    }

    this.#tempCode = keyInfo.code;

    const isUpperCase = this.#upperCaseSwitch.down(keyInfo.key).IsUpperCase;

    if (isUpperCase) {
      this.#view.upperCase();
      this.#view.isUpprecase = isUpperCase;
    } else {
      this.#view.lowerCase();
    }

    const langSwitch = this.#langSwitch.execute(keyInfo);
    if (langSwitch) {
      this.#view.changeLanguage(this.#langSwitch.Language);
    }

    this.#view.downKey(keyInfo);
  }

  handlerUpKey(keyInfo) {
    if (!(keyInfo instanceof KeyboardEvent)) return;
    if (this.#tempCode === null) return;
    const isUpperCase = this.#upperCaseSwitch.up().IsUpperCase;
    if (!isUpperCase) {
      this.#view.lowerCase();
      this.#view.isUpprecase = isUpperCase;
    }

    this.#view.keyIlluminationOff();
    this.#tempCode = null;
  }
}

export default KeyBoardController;
