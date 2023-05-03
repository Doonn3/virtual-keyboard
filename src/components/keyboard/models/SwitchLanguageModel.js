class SwitchLanguageModel {
  #langState = {
    curr: localStorage.getItem('Language') || 'eng',
    switch() {
      if (this.curr === 'eng') {
        this.curr = 'rus';
      } else {
        this.curr = 'eng';
      }
    },
  };

  get Language() {
    return this.#langState.curr;
  }

  execute(keyInfo) {
    if (!(keyInfo instanceof KeyboardEvent)) return false;

    if (!(keyInfo.shiftKey && keyInfo.ctrlKey)) return false;
    this.#langState.switch();
    localStorage.setItem('Language', this.#langState.curr);
    return true;
  }
}

export default SwitchLanguageModel;
