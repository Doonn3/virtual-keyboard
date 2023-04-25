import button from './components/button';
import KeyBoardController from './KeyBoardController';
import './style.scss';

class KeyBoardView {
  #root = null;
  #buttons = [];

  init() {
    this.#root = document.querySelector('.virtual-keyboard');
    this.#buttons = [...document.querySelectorAll('.button')];
  }

  render() {
    return `
        <section class="virtual-keyboard">
            <div class="virtual-keyboard__draw-row">
            ${button({ id: 'Backquote', key: '`', dataEng: '`~', dataRus: 'ёЁ' })}
            ${button({ id: 'Digit1', key: '1', dataEng: '1!', dataRus: '1!' })}
            ${button({ id: 'Digit2', key: '2', dataEng: '2@', dataRus: '2"' })}
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
            ${button({ id: 'keyQ', key: 'q', dataEng: 'qQ', dataRus: 'йЙ' })}
            ${button({ id: 'keyW', key: 'w', dataEng: 'wW', dataRus: 'цЦ' })}
            ${button({ id: 'keyE', key: 'e', dataEng: 'eE', dataRus: 'уУ' })}
            ${button({ id: 'keyR', key: 'r', dataEng: 'rR', dataRus: 'кК' })}
            ${button({ id: 'keyT', key: 't', dataEng: 'tT', dataRus: 'еЕ' })}
            ${button({ id: 'keyY', key: 'y', dataEng: 'yY', dataRus: 'нН' })}
            ${button({ id: 'keyU', key: 'u', dataEng: 'uU', dataRus: 'гГ' })}
            ${button({ id: 'keyI', key: 'i', dataEng: 'iI', dataRus: 'шШ' })}
            ${button({ id: 'keyO', key: 'o', dataEng: 'oO', dataRus: 'щЩ' })}
            ${button({ id: 'keyP', key: 'p', dataEng: 'pP', dataRus: 'зЗ' })}
            ${button({ id: 'BracketLeft', key: '[', dataEng: '[{', dataRus: 'хХ' })}
            ${button({ id: 'BracketRight', key: ']', dataEng: ']}', dataRus: 'ъЪ' })}
            ${button({ id: 'Backslash', key: '\\', dataEng: '\\|', dataRus: '\\/' })}
            ${button({ id: 'Delete', key: 'Del', dataEng: 'Delete', dataRus: 'Delete' })}
            </div>
        </section>
        `;
  }

  downKey(key) {
    console.log(key);
  }

  upKey(key) {
    console.log(key);
  }

  changeLanguage(lang) {
    if (lang === undefined) lang = 'eng';
    if (lang !== 'eng' && lang !== 'rus') lang = 'eng';

    this.#buttons.forEach((btn) => {
      if (btn.id === 'Backspace' || btn.id === 'Tab' || btn.id === 'Delete') return;
      const attrib = btn.getAttribute(`data-key-${lang}`);
      const data = attrib.split('');
      const key = btn.querySelector('.button__key');
      key.textContent = data[0];
    });
  }
}

export default KeyBoardView;
