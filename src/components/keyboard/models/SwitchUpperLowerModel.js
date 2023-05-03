class SwitchUpperLowerMode {
  #isCapsLock = false;

  #isShift = false;

  #upperCase = false;

  get IsUpperCase() {
    return this.#upperCase;
  }

  down(code) {
    if (code === 'Shift') this.#isShift = true;
    if (code === 'CapsLock') this.#isCapsLock = !this.#isCapsLock;

    if (this.#isCapsLock) {
      this.#upperCase = true;
    } else {
      this.#upperCase = false;
    }

    if (this.#isCapsLock === false && this.#isShift === true) {
      this.#upperCase = true;
    }

    return this;
  }

  up() {
    if (this.#isShift && this.#isCapsLock === false) {
      this.#upperCase = false;
      this.#isShift = false;
    }

    return this;
  }
}

export default SwitchUpperLowerMode;
