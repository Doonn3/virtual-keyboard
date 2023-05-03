class VirtualKeyboardEvent {
  static current = new VirtualKeyboardEvent();

  #ownSub = null;

  subscribe(sub) {
    this.#ownSub = sub;
  }

  emit(data) {
    if (typeof this.#ownSub !== 'function') return;
    this.#ownSub(data);
  }
}

export default VirtualKeyboardEvent;
