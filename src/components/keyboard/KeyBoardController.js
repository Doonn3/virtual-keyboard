import { app } from '../../main';
import KeyBoardView from './KeyBoardView';

class KeyBoardController {
  #view = new KeyBoardView();

  #langState = {
    curr: localStorage.getItem("Language"),
    switch() {
      if (this.curr === 'eng') {
        this.curr = 'rus';
      } else {
        this.curr = 'eng';
      }
    },
  };

  init() {
    this.#render();
  }

  #render() {
    app.insertAdjacentHTML('beforeend', this.#view.render());
    this.#view.init();
    this.#view.changeLanguage(this.#langState.curr);
  }

  switchLanguage() {
    this.#langState.switch();
    this.#view.changeLanguage(this.#langState.curr);
    localStorage.setItem("Language", this.#langState.curr);
  }

  handlerDownKey(keyInfo) {
    if (!(keyInfo instanceof KeyboardEvent)) return;
    const {key, code} = keyInfo;
    if (keyInfo.shiftKey && keyInfo.altKey) {
        this.switchLanguage();
    }
    console.log(code);
  }

  handlerUpKey(keyInfo) {
    if (!(keyInfo instanceof KeyboardEvent)) return;
    const {key, code} = keyInfo;
  }
}

export default KeyBoardController;
