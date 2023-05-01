class VirtualKeyboardEvent {
    static current = new VirtualKeyboardEvent();
    #ownSub;

    subscribe(sub) {
        this.#ownSub = sub;
    }

    emit(data) {
        this.#ownSub(data);
    }
}

export default VirtualKeyboardEvent;