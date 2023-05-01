import VirtualKeyboardEvent from '../../Events/VirtualKeyboardEvent';
import button from './components/button';
import KeyBoardController from './KeyBoardController';
import './style.scss';

class KeyBoardView {
  #root = null;
  #buttons = [];
  #dataKeyState = {
    curr: 'data-key-eng',
    switch() {
      if (this.curr === 'data-key-eng') {
        this.curr = 'data-key-rus';
      } else {
        this.curr = 'data-key-eng';
      }
    },
  };

  init() {
    this.#root = document.querySelector('.virtual-keyboard');
    this.#buttons = [...document.querySelectorAll('.button')];

    this.#root.addEventListener('mousedown', this.#handlerClickDown);
    this.#root.addEventListener('mouseup', this.#handlerClickUp);
  }

  render() {
    return `
        <section class="virtual-keyboard">
            <div class="virtual-keyboard__draw-row">
            ${button({ id: 'Backquote', key: '`', dataEng: '`~', dataRus: 'ёЁ' })}
            ${button({ id: 'Digit1', key: '1', dataEng: '1!', dataRus: '1!' })}
            ${button({ id: 'Digit2', key: '2', dataEng: '2@', dataRus: '2&quot;' })}
            ${button({ id: 'Digit3', key: '3', dataEng: '3#', dataRus: '3№' })}
            ${button({ id: 'Digit4', key: '4', dataEng: '4$', dataRus: '4;' })}
            ${button({ id: 'Digit5', key: '5', dataEng: '5%', dataRus: '5%' })}
            ${button({ id: 'Digit6', key: '6', dataEng: '6^', dataRus: '6:' })}
            ${button({ id: 'Digit7', key: '7', dataEng: '7&', dataRus: '7?' })}
            ${button({ id: 'Digit8', key: '8', dataEng: '8*', dataRus: '8*' })}
            ${button({ id: 'Digit9', key: '9', dataEng: '9(', dataRus: '9(' })}
            ${button({ id: 'Digit0', key: '0', dataEng: '0)', dataRus: '0)' })}
            ${button({ id: 'Minus', key: '-', dataEng: '-_', dataRus: '-_' })}
            ${button({ id: 'Equal', key: '=', dataEng: '=+', dataRus: '=+' })}
            ${button({
              id: 'Backspace',
              key: 'Backspace',
              dataEng: 'Backspace',
              dataRus: 'Backspace',
            })}
            </div>

            <div class="virtual-keyboard__draw-row">
            ${button({ id: 'Tab', key: 'Tab', dataEng: 'Tab', dataRus: 'Tab' })}
            ${button({ id: 'KeyQ', key: 'q', dataEng: 'qQ', dataRus: 'йЙ' })}
            ${button({ id: 'KeyW', key: 'w', dataEng: 'wW', dataRus: 'цЦ' })}
            ${button({ id: 'KeyE', key: 'e', dataEng: 'eE', dataRus: 'уУ' })}
            ${button({ id: 'KeyR', key: 'r', dataEng: 'rR', dataRus: 'кК' })}
            ${button({ id: 'KeyT', key: 't', dataEng: 'tT', dataRus: 'еЕ' })}
            ${button({ id: 'KeyY', key: 'y', dataEng: 'yY', dataRus: 'нН' })}
            ${button({ id: 'KeyU', key: 'u', dataEng: 'uU', dataRus: 'гГ' })}
            ${button({ id: 'KeyI', key: 'i', dataEng: 'iI', dataRus: 'шШ' })}
            ${button({ id: 'KeyO', key: 'o', dataEng: 'oO', dataRus: 'щЩ' })}
            ${button({ id: 'KeyP', key: 'p', dataEng: 'pP', dataRus: 'зЗ' })}
            ${button({ id: 'BracketLeft', key: '[', dataEng: '[{', dataRus: 'хХ' })}
            ${button({ id: 'BracketRight', key: ']', dataEng: ']}', dataRus: 'ъЪ' })}
            ${button({ id: 'Backslash', key: '\\', dataEng: '\\|', dataRus: '\\/' })}
            ${button({ id: 'Delete', key: 'Del', dataEng: 'Delete', dataRus: 'Delete' })}
            </div>

            <div class="virtual-keyboard__draw-row">
            ${button({ id: 'CapsLock', key: 'CapsLock', dataEng: 'CapsLock', dataRus: 'CapsLock' })}
            ${button({ id: 'KeyA', key: 'a', dataEng: 'aA', dataRus: 'фФ' })}
            ${button({ id: 'KeyS', key: 's', dataEng: 'sS', dataRus: 'ыЫ' })}
            ${button({ id: 'KeyD', key: 'd', dataEng: 'dD', dataRus: 'вВ' })}
            ${button({ id: 'KeyF', key: 'f', dataEng: 'fF', dataRus: 'аА' })}
            ${button({ id: 'KeyG', key: 'g', dataEng: 'gG', dataRus: 'пП' })}
            ${button({ id: 'KeyH', key: 'h', dataEng: 'hH', dataRus: 'рР' })}
            ${button({ id: 'KeyJ', key: 'j', dataEng: 'jJ', dataRus: 'оО' })}
            ${button({ id: 'KeyK', key: 'k', dataEng: 'kK', dataRus: 'лЛ' })}
            ${button({ id: 'KeyL', key: 'l', dataEng: 'lL', dataRus: 'дД' })}
            ${button({ id: 'Semicolon', key: ';', dataEng: ';:', dataRus: 'жЖ' })}
            ${button({ id: 'Quote', key: '&sbquo;', dataEng: '&sbquo;;&quot;', dataRus: 'эЭ' })}
            ${button({ id: 'Enter', key: 'Enter', dataEng: 'Enter', dataRus: 'Enter' })}
            </div>

            <div class="virtual-keyboard__draw-row">
            ${button({
              id: 'ShiftLeft',
              key: 'Shift',
              dataEng: 'ShiftLeft',
              dataRus: 'ShiftLeft',
            })}
            ${button({ id: 'KeyZ', key: 'z', dataEng: 'zZ', dataRus: 'яЯ' })}
            ${button({ id: 'KeyX', key: 'x', dataEng: 'xX', dataRus: 'чЧ' })}
            ${button({ id: 'KeyC', key: 'c', dataEng: 'cC', dataRus: 'сС' })}
            ${button({ id: 'KeyV', key: 'v', dataEng: 'vV', dataRus: 'мМ' })}
            ${button({ id: 'KeyB', key: 'b', dataEng: 'bB', dataRus: 'иИ' })}
            ${button({ id: 'KeyN', key: 'n', dataEng: 'nN', dataRus: 'тТ' })}
            ${button({ id: 'KeyM', key: 'm', dataEng: 'mM', dataRus: 'ьЬ' })}
            ${button({ id: 'Comma', key: ',', dataEng: ',<', dataRus: 'бБ' })}
            ${button({ id: 'Period', key: '.', dataEng: '.>', dataRus: 'юЮ' })}
            ${button({ id: 'Slash', key: '/', dataEng: '/?', dataRus: '.,' })}
            ${button({
              id: 'ArrowUp',
              key: '⬆',
              dataEng: '⬆',
              dataRus: '⬆',
            })}
            ${button({
              id: 'ShiftRight',
              key: 'Shift',
              dataEng: 'ShiftRight',
              dataRus: 'ShiftRight',
            })}
            </div>

            <div class="virtual-keyboard__draw-row">
            ${button({ id: 'ControlLeft', key: 'Ctrl', dataEng: 'Ctrl', dataRus: 'Ctrl' })}
            ${button({ id: 'MetaLeft', key: 'Win', dataEng: 'Win', dataRus: 'Win' })}
            ${button({ id: 'AltLeft', key: 'Alt', dataEng: 'Alt', dataRus: 'Alt' })}
            ${button({ id: 'Space', key: ' ', dataEng: ' ', dataRus: ' ' })}
            ${button({ id: 'AltRight', key: 'Alt', dataEng: 'Alt', dataRus: 'Alt' })}
            ${button({
              id: 'ArrowLeft',
              key: '⬅',
              dataEng: '⬅',
              dataRus: '⬅',
            })}
            ${button({
              id: 'ArrowDown',
              key: '⬇',
              dataEng: '⬇',
              dataRus: '⬇',
            })}
            ${button({
              id: 'ArrowRight',
              key: '⮕',
              dataEng: '⮕',
              dataRus: '⮕',
            })}
            ${button({ id: 'ControlRight', key: 'Ctrl', dataEng: 'Ctrl', dataRus: 'Ctrl' })}
            </div>
        </section>
        `;
  }

  #tempBtn = null;
  #handlerClickDown = (event) => {
    const target = event.target;
    const btn = target.closest('.btn');
    if (btn === null) return;
    this.#tempBtn = btn;
    const code = btn.getAttribute('id');
    const key = btn.querySelector('.btn__key').textContent;
    this.#keyIllumination(code);
    VirtualKeyboardEvent.current.emit({ code, key });
  };

  #handlerClickUp = (event) => {
    const code = this.#tempBtn.getAttribute('id');
    this.#keyIllumination(code);
  };

  downKey(key) {
    this.#keyIllumination(key);
  }

  upKey(key) {
    if (key === 'CapsLock') return;
    this.#keyIllumination(key);
  }

  #keyIllumination(key) {
    const findBtn = this.#buttons.find((btn) => btn.id === key);
    if (findBtn) {
      findBtn.classList.toggle('pressed--button');
    }
  }

  upperCase() {
    this.#buttons.forEach((btn) => {
      if (this.#match(btn.id)) return;
      const attrib = btn.getAttribute(`${this.#dataKeyState.curr}`);
      const data = attrib.split('');
      const key = btn.querySelector('.btn__key');
      key.textContent = data[1];
    });
  }

  lowerCase() {
    console.log('asd');
    this.#buttons.forEach((btn) => {
      if (this.#match(btn.id)) return;
      const attrib = btn.getAttribute(`${this.#dataKeyState.curr}`);
      const data = attrib.split('');
      const key = btn.querySelector('.btn__key');
      key.textContent = data[0];
    });
  }

  changeLanguage(lang) {
    if (lang === undefined) lang = 'eng';
    if (lang !== 'eng' && lang !== 'rus') lang = 'eng';
    this.#dataKeyState.switch();

    this.#buttons.forEach((btn) => {
      if (this.#match(btn.id)) return;
      const attrib = btn.getAttribute(`data-key-${lang}`);
      const data = attrib.split('');
      const key = btn.querySelector('.btn__key');
      key.textContent = data[0];
    });
  }

  #match(str) {
    const arr = [
      'Backspace',
      'Tab',
      'Delete',
      'CapsLock',
      'ShiftLeft',
      'ShiftRight',
      'ControlLeft',
      'ControlRight',
      'MetaLeft',
      'AltLeft',
      'AltRight',
    ];
    if (arr.includes(str)) return true;
    return false;
  }
}

export default KeyBoardView;
