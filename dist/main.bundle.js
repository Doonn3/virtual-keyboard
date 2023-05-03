/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ejs":
/*!**********************!*\
  !*** ./src/main.ejs ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n    \r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/keyboard/components/button.scss":
/*!********************************************************!*\
  !*** ./src/components/keyboard/components/button.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/keyboard/style.scss":
/*!********************************************!*\
  !*** ./src/components/keyboard/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/textarea/style.scss":
/*!********************************************!*\
  !*** ./src/components/textarea/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/title/style.scss":
/*!*****************************************!*\
  !*** ./src/components/title/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Events/VirtualKeyboardEvent.js":
/*!********************************************!*\
  !*** ./src/Events/VirtualKeyboardEvent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VirtualKeyboardEvent);


/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrowKeyCode": () => (/* binding */ arrowKeyCode),
/* harmony export */   "ignorKeyCode": () => (/* binding */ ignorKeyCode),
/* harmony export */   "mapingArrows": () => (/* binding */ mapingArrows),
/* harmony export */   "matchCode": () => (/* binding */ matchCode)
/* harmony export */ });
const matchCode = {
  ShiftLeft: 'ShiftLeft',
  ShiftRight: 'ShiftRight',
  AltLeft: 'AltLeft',
  AltRight: 'AltRight',
  ArrowUp: 'ArrowUp',
  ArrowLeft: 'ArrowLeft',
  ArrowDown: 'ArrowDown',
  ArrowRight: 'ArrowRight',
};

const arrowKeyCode = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const mapingArrows = {
  ArrowUp: '⬆',
  ArrowLeft: '⬅',
  ArrowDown: '⬇',
  ArrowRight: '⮕',
};

const ignorKeyCode = [
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'AltRight',
  'AltLeft',
  'CapsLock',
  'Tab',
  'ControllLeft',
  'ControllRight',
  'Meta',
  'ShiftLeft',
  'ShiftRight',
];


/***/ }),

/***/ "./src/components/keyboard/KeyBoardController.js":
/*!*******************************************************!*\
  !*** ./src/components/keyboard/KeyBoardController.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KeyBoardView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyBoardView */ "./src/components/keyboard/KeyBoardView.js");
/* harmony import */ var _models_SwitchLanguageModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/SwitchLanguageModel */ "./src/components/keyboard/models/SwitchLanguageModel.js");
/* harmony import */ var _models_SwitchUpperLowerModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/SwitchUpperLowerModel */ "./src/components/keyboard/models/SwitchUpperLowerModel.js");




class KeyBoardController {
  #langSwitch = new _models_SwitchLanguageModel__WEBPACK_IMPORTED_MODULE_1__["default"]();

  #upperCaseSwitch = new _models_SwitchUpperLowerModel__WEBPACK_IMPORTED_MODULE_2__["default"]();

  #view = new _KeyBoardView__WEBPACK_IMPORTED_MODULE_0__["default"](this.#upperCaseSwitch);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyBoardController);


/***/ }),

/***/ "./src/components/keyboard/KeyBoardView.js":
/*!*************************************************!*\
  !*** ./src/components/keyboard/KeyBoardView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Events_VirtualKeyboardEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Events/VirtualKeyboardEvent */ "./src/Events/VirtualKeyboardEvent.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button */ "./src/components/keyboard/components/button.js");
/* harmony import */ var _models_SwitchUpperLowerModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/SwitchUpperLowerModel */ "./src/components/keyboard/models/SwitchUpperLowerModel.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/components/keyboard/style.scss");





class KeyBoardView {
  #root = null;

  #model;

  #buttons = [];

  #dataKeyState = {
    curr: 'data-key-eng',
    switch(lang) {
      this.curr = `data-key-${lang}`;
    },
  };

  constructor(model) {
    if (model instanceof _models_SwitchUpperLowerModel__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      this.#model = model;
    }
  }

  init() {
    this.#root = document.querySelector('.virtual-keyboard');
    this.#buttons = [...document.querySelectorAll('.btn')];

    this.#root.addEventListener('mousedown', this.#handlerClickDown);
    this.#root.addEventListener('mouseup', this.#handlerClickUp);
  }

  render() {
    return `
        <section class="virtual-keyboard">
            <div class="virtual-keyboard__draw-row">
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Backquote', key: '`', dataEng: '`~', dataRus: 'ёЁ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit1', key: '1', dataEng: '1!', dataRus: '1!' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit2', key: '2', dataEng: '2@', dataRus: '2&quot;' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit3', key: '3', dataEng: '3#', dataRus: '3№' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit4', key: '4', dataEng: '4$', dataRus: '4;' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit5', key: '5', dataEng: '5%', dataRus: '5%' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit6', key: '6', dataEng: '6^', dataRus: '6:' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit7', key: '7', dataEng: '7&', dataRus: '7?' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit8', key: '8', dataEng: '8*', dataRus: '8*' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit9', key: '9', dataEng: '9(', dataRus: '9(' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Digit0', key: '0', dataEng: '0)', dataRus: '0)' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Minus', key: '-', dataEng: '-_', dataRus: '-_' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Equal', key: '=', dataEng: '=+', dataRus: '=+' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({
              id: 'Backspace',
              key: 'Backspace',
              dataEng: 'Backspace',
              dataRus: 'Backspace',
            })}
            </div>

            <div class="virtual-keyboard__draw-row">
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Tab', key: 'Tab', dataEng: 'Tab', dataRus: 'Tab' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyQ', key: 'q', dataEng: 'qQ', dataRus: 'йЙ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyW', key: 'w', dataEng: 'wW', dataRus: 'цЦ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyE', key: 'e', dataEng: 'eE', dataRus: 'уУ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyR', key: 'r', dataEng: 'rR', dataRus: 'кК' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyT', key: 't', dataEng: 'tT', dataRus: 'еЕ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyY', key: 'y', dataEng: 'yY', dataRus: 'нН' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyU', key: 'u', dataEng: 'uU', dataRus: 'гГ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyI', key: 'i', dataEng: 'iI', dataRus: 'шШ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyO', key: 'o', dataEng: 'oO', dataRus: 'щЩ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyP', key: 'p', dataEng: 'pP', dataRus: 'зЗ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'BracketLeft', key: '[', dataEng: '[{', dataRus: 'хХ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'BracketRight', key: ']', dataEng: ']}', dataRus: 'ъЪ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Backslash', key: '\\', dataEng: '\\|', dataRus: '\\/' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Delete', key: 'Del', dataEng: 'Delete', dataRus: 'Delete' })}
            </div>

            <div class="virtual-keyboard__draw-row">
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'CapsLock', key: 'CapsLock', dataEng: 'CapsLock', dataRus: 'CapsLock' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyA', key: 'a', dataEng: 'aA', dataRus: 'фФ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyS', key: 's', dataEng: 'sS', dataRus: 'ыЫ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyD', key: 'd', dataEng: 'dD', dataRus: 'вВ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyF', key: 'f', dataEng: 'fF', dataRus: 'аА' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyG', key: 'g', dataEng: 'gG', dataRus: 'пП' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyH', key: 'h', dataEng: 'hH', dataRus: 'рР' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyJ', key: 'j', dataEng: 'jJ', dataRus: 'оО' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyK', key: 'k', dataEng: 'kK', dataRus: 'лЛ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyL', key: 'l', dataEng: 'lL', dataRus: 'дД' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Semicolon', key: ';', dataEng: ';:', dataRus: 'жЖ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Quote', key: '&sbquo;', dataEng: '&sbquo;;&quot;', dataRus: 'эЭ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Enter', key: 'Enter', dataEng: 'Enter', dataRus: 'Enter' })}
            </div>

            <div class="virtual-keyboard__draw-row">
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({
              id: 'ShiftLeft',
              key: 'Shift',
              dataEng: 'ShiftLeft',
              dataRus: 'ShiftLeft',
            })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyZ', key: 'z', dataEng: 'zZ', dataRus: 'яЯ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyX', key: 'x', dataEng: 'xX', dataRus: 'чЧ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyC', key: 'c', dataEng: 'cC', dataRus: 'сС' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyV', key: 'v', dataEng: 'vV', dataRus: 'мМ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyB', key: 'b', dataEng: 'bB', dataRus: 'иИ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyN', key: 'n', dataEng: 'nN', dataRus: 'тТ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'KeyM', key: 'm', dataEng: 'mM', dataRus: 'ьЬ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Comma', key: ',', dataEng: ',<', dataRus: 'бБ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Period', key: '.', dataEng: '.>', dataRus: 'юЮ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Slash', key: '/', dataEng: '/?', dataRus: '.,' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({
              id: 'ArrowUp',
              key: '⬆',
              dataEng: '⬆',
              dataRus: '⬆',
            })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({
              id: 'ShiftRight',
              key: 'Shift',
              dataEng: 'ShiftRight',
              dataRus: 'ShiftRight',
            })}
            </div>

            <div class="virtual-keyboard__draw-row">
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'ControlLeft', key: 'Ctrl', dataEng: 'Ctrl', dataRus: 'Ctrl' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'MetaLeft', key: 'Win', dataEng: 'Win', dataRus: 'Win' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'AltLeft', key: 'Alt', dataEng: 'Alt', dataRus: 'Alt' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'Space', key: ' ', dataEng: ' ', dataRus: ' ' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'AltRight', key: 'Alt', dataEng: 'Alt', dataRus: 'Alt' })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({
              id: 'ArrowLeft',
              key: '⬅',
              dataEng: '⬅',
              dataRus: '⬅',
            })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({
              id: 'ArrowDown',
              key: '⬇',
              dataEng: '⬇',
              dataRus: '⬇',
            })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({
              id: 'ArrowRight',
              key: '⮕',
              dataEng: '⮕',
              dataRus: '⮕',
            })}
            ${(0,_components_button__WEBPACK_IMPORTED_MODULE_1__["default"])({ id: 'ControlRight', key: 'Ctrl', dataEng: 'Ctrl', dataRus: 'Ctrl' })}
            </div>
        </section>
        `;
  }

  #tempBtn = null;

  isUpprecase = false;

  #handlerClickDown = (event) => {
    const { target } = event;
    const btn = target.closest('.btn');
    if (btn === null) return;
    this.#tempBtn = btn;
    const code = btn.getAttribute('id');
    const key = btn.querySelector('.btn__key').textContent;

    if (this.#model instanceof _models_SwitchUpperLowerModel__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      if (code === 'CapsLock' || key === 'Shift') {
        const isUpperCase = this.#model.down(key).IsUpperCase;
        if (isUpperCase) {
          this.upperCase();
        } else {
          this.lowerCase();
        }
      }
    }

    this.keyIllumination(code);
    _Events_VirtualKeyboardEvent__WEBPACK_IMPORTED_MODULE_0__["default"].current.emit({ code, key });
  };

  #handlerClickUp = (event) => {
    if (this.#tempBtn === null || this.#tempBtn === undefined) return;
    const { target } = event;
    const btn = target.closest('.btn');
    if (btn === null) return;
    this.#tempBtn = btn;
    const code = btn.getAttribute('id');
    const key = btn.querySelector('.btn__key').textContent;

    if (code === 'CapsLock' || key === 'Shift') {
      const isUpperCase = this.#model.up().IsUpperCase;
      if (!isUpperCase) {
        this.lowerCase();
      }
    }

    this.keyIlluminationOff(code);

    this.#tempBtn = null;
  };

  downKey(info) {
    if (!(info instanceof KeyboardEvent)) return;

    const { code } = info;
    const findBtn = this.#buttons.find((btn) => btn.id === code);

    if (findBtn) {
      const key = findBtn.querySelector('.btn__key').textContent;
      _Events_VirtualKeyboardEvent__WEBPACK_IMPORTED_MODULE_0__["default"].current.emit({ code, key });
    }
  }

  keyIllumination(code) {
    const findBtn = this.#buttons.find((btn) => btn.id === code);

    if (findBtn) {
      findBtn.classList.toggle('pressed--button');
    }
  }

  keyIlluminationOff(code) {
    const ignor = 'CapsLock';
    if (code === ignor) return;

    const findBtn = this.#buttons.find((btn) => btn.id === code);
    if (findBtn) {
      findBtn.classList.remove('pressed--button');
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
    this.#buttons.forEach((btn) => {
      if (this.#match(btn.id)) return;
      const attrib = btn.getAttribute(`${this.#dataKeyState.curr}`);
      const data = attrib.split('');
      const key = btn.querySelector('.btn__key');
      key.textContent = data[0];
    });
  }

  changeLanguage(lang) {
    let la = lang;
    if (lang === undefined) la = 'eng';
    if (lang !== 'eng' && lang !== 'rus') la = 'eng';

    this.#buttons.forEach((btn) => {
      if (this.#match(btn.id)) return;
      const attrib = btn.getAttribute(`data-key-${la}`);
      const data = attrib.split('');
      const key = btn.querySelector('.btn__key');
      key.textContent = data[0];
    });
    this.#dataKeyState.switch(la);
  }

  #match(str) {
    const arr = [
      'Backspace',
      'Tab',
      'Delete',
      'CapsLock',
      'Enter',
      'ShiftLeft',
      'ShiftRight',
      'ControlLeft',
      'ControlRight',
      'MetaLeft',
      'AltLeft',
      'AltRight',
      'ArrowLeft',
      'ArrowUp',
      'ArrowDown',
      'ArrowRight',
    ];
    if (arr.includes(str)) return true;
    return false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyBoardView);


/***/ }),

/***/ "./src/components/keyboard/components/button.js":
/*!******************************************************!*\
  !*** ./src/components/keyboard/components/button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/components/keyboard/components/button.scss");


const check = [
  'Backspace',
  'Tab',
  'Delete',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'ControlRight',
  'MetaLeft',
  'AltLeft',
  'AltRight',
];

function button(buttonType) {
  const { id, key, dataEng, dataRus } = buttonType;

  const classNameMod =
    id === check.find((item) => item === id) ? 'medium' : id === 'Space' ? 'large' : '';

  return `
    <div id="${id}" class="btn ${classNameMod}" data-key-eng="${dataEng}" data-key-rus="${dataRus}">
        <span class="btn__key">${key}</span>
    </div>
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (button);


/***/ }),

/***/ "./src/components/keyboard/models/SwitchLanguageModel.js":
/*!***************************************************************!*\
  !*** ./src/components/keyboard/models/SwitchLanguageModel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchLanguageModel);


/***/ }),

/***/ "./src/components/keyboard/models/SwitchUpperLowerModel.js":
/*!*****************************************************************!*\
  !*** ./src/components/keyboard/models/SwitchUpperLowerModel.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchUpperLowerMode);


/***/ }),

/***/ "./src/components/textarea/Command/BaseCommand.js":
/*!********************************************************!*\
  !*** ./src/components/textarea/Command/BaseCommand.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  #charAdd(char) {
    if (!(this.input instanceof HTMLTextAreaElement)) return;
    const selectionStart = this.input.selectionStart;
    const selectionEnd = this.input.selectionEnd;
    const textBeforeSelection = this.input.value.slice(0, selectionStart);
    const textAfterSelection = this.input.value.slice(selectionEnd);
    this.input.value = textBeforeSelection + char + textAfterSelection;
    this.input.setSelectionRange(selectionStart + 1, selectionStart + 1);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseCommand);


/***/ }),

/***/ "./src/components/textarea/TextAreaInput.js":
/*!**************************************************!*\
  !*** ./src/components/textarea/TextAreaInput.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _Events_VirtualKeyboardEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Events/VirtualKeyboardEvent */ "./src/Events/VirtualKeyboardEvent.js");
/* harmony import */ var _Command_BaseCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Command/BaseCommand */ "./src/components/textarea/Command/BaseCommand.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/components/textarea/style.scss");





class TextAreaInput {
  #command;

  #isFocus = true;

  init() {
    const root = document.querySelector('.text-area');
    this.#command = new _Command_BaseCommand__WEBPACK_IMPORTED_MODULE_2__["default"](root);
    root.addEventListener('keydown', this.handlerTextArea);
    root.addEventListener('keyup', this.handlerTextAreaUp);
    // root.addEventListener('focus', this.#handlerFocus);
    // root.addEventListener('focusout', this.#handlerFocusout);
    root.focus();
    root.addEventListener('blur', () => {
      root.focus();
    });

    _Events_VirtualKeyboardEvent__WEBPACK_IMPORTED_MODULE_1__["default"].current.subscribe(this.#handlerVirtualKeyboard);
  }

  render() {
    return '<textarea class="text-area"></textarea>';
  }

  #isArrodData = false;

  #handlerVirtualKeyboard = (data) => {
    if (this.#isArrodData) return;

    if (this.#command instanceof _Command_BaseCommand__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      this.#command.execute(data);
    }
  };

  handlerTextArea = (event) => {
    if (!(event instanceof KeyboardEvent)) return;
    const { code } = event;
    if (_common_utils__WEBPACK_IMPORTED_MODULE_0__.arrowKeyCode.includes(code)) {
      this.#isArrodData = true;
      return;
    }

    if (event.key === 'F12') return;

    event.preventDefault();
  };

  handlerTextAreaUp = () => {
    this.#isArrodData = false;

    // event.preventDefault();
  };

  // #handlerFocus = () => {
  //   this.#isFocus = true;
  // };

  // #handlerFocusout = () => {
  //   this.#isFocus = false;
  // };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextAreaInput);


/***/ }),

/***/ "./src/components/title/Title.js":
/*!***************************************!*\
  !*** ./src/components/title/Title.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/title/style.scss");


function Title(text) {
  return `<p class="text">${text}</>`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils */ "./src/common/utils.js");
/* harmony import */ var _components_keyboard_KeyBoardController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/keyboard/KeyBoardController */ "./src/components/keyboard/KeyBoardController.js");
/* harmony import */ var _components_textarea_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/textarea/TextAreaInput */ "./src/components/textarea/TextAreaInput.js");
/* harmony import */ var _components_title_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/title/Title */ "./src/components/title/Title.js");
/* harmony import */ var _main_ejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.ejs */ "./src/main.ejs");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");







document.body.insertAdjacentHTML('beforeend', '<div id="app"></div>');

const app = document.querySelector('#app');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

const textArea = new _components_textarea_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__["default"]();
app.insertAdjacentHTML('beforeend', textArea.render());
textArea.init();

const keyboard = new _components_keyboard_KeyBoardController__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.insertAdjacentHTML('beforeend', keyboard.render());
keyboard.init();

app.insertAdjacentHTML(
  'beforeend',
  (0,_components_title_Title__WEBPACK_IMPORTED_MODULE_3__["default"])(`Клавиатура создана в операционной системе Windows
Для переключения языка комбинация: Ctrl + Shift`),
);

const match = ['Tab', 'Shift', 'Alt', 'Meta'];

const onKeyDown = (event) => {
  if (_common_utils__WEBPACK_IMPORTED_MODULE_0__.ignorKeyCode.includes(event.code)) {
    event.preventDefault();
  }

  if (!(event instanceof KeyboardEvent)) return;
  if (match.includes(event.key)) event.preventDefault();

  keyboard.handlerDownKey(event);
};

const onKeyUp = (event) => {
  // event.preventDefault();
  if (!(event instanceof KeyboardEvent)) return;
  keyboard.handlerUpKey(event);
};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp, { passive: false });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxpRUFBZSxHQUFHLEVBQUM7O0FBRW5CLHFCQUFxQiwwRUFBYTtBQUNsQztBQUNBOztBQUVBLHFCQUFxQiwrRUFBa0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtRUFBSztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFNLGdFQUFxQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvbWFpbi5lanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL2tleWJvYXJkL2NvbXBvbmVudHMvYnV0dG9uLnNjc3M/MDQ2NyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2NvbXBvbmVudHMva2V5Ym9hcmQvc3R5bGUuc2Nzcz8xNmI4Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS9zdHlsZS5zY3NzPzY2YTkiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL3RpdGxlL3N0eWxlLnNjc3M/Y2I4MyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL21haW4uc2Nzcz8zMzYyIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvRXZlbnRzL1ZpcnR1YWxLZXlib2FyZEV2ZW50LmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tcG9uZW50cy9rZXlib2FyZC9LZXlCb2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL2tleWJvYXJkL0tleUJvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2NvbXBvbmVudHMva2V5Ym9hcmQvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL2tleWJvYXJkL21vZGVscy9Td2l0Y2hMYW5ndWFnZU1vZGVsLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tcG9uZW50cy9rZXlib2FyZC9tb2RlbHMvU3dpdGNoVXBwZXJMb3dlck1vZGVsLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS9Db21tYW5kL0Jhc2VDb21tYW5kLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS9UZXh0QXJlYUlucHV0LmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tcG9uZW50cy90aXRsZS9UaXRsZS5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG48aGVhZD5cXHJcXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcclxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiPlxcclxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxyXFxuICAgIDx0aXRsZT5Eb2N1bWVudDwvdGl0bGU+XFxyXFxuPC9oZWFkPlxcclxcbjxib2R5PlxcclxcbiAgICBcXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyBWaXJ0dWFsS2V5Ym9hcmRFdmVudCB7XHJcbiAgc3RhdGljIGN1cnJlbnQgPSBuZXcgVmlydHVhbEtleWJvYXJkRXZlbnQoKTtcclxuXHJcbiAgI293blN1YiA9IG51bGw7XHJcblxyXG4gIHN1YnNjcmliZShzdWIpIHtcclxuICAgIHRoaXMuI293blN1YiA9IHN1YjtcclxuICB9XHJcblxyXG4gIGVtaXQoZGF0YSkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLiNvd25TdWIgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgIHRoaXMuI293blN1YihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpcnR1YWxLZXlib2FyZEV2ZW50O1xyXG4iLCJleHBvcnQgY29uc3QgbWF0Y2hDb2RlID0ge1xuICBTaGlmdExlZnQ6ICdTaGlmdExlZnQnLFxuICBTaGlmdFJpZ2h0OiAnU2hpZnRSaWdodCcsXG4gIEFsdExlZnQ6ICdBbHRMZWZ0JyxcbiAgQWx0UmlnaHQ6ICdBbHRSaWdodCcsXG4gIEFycm93VXA6ICdBcnJvd1VwJyxcbiAgQXJyb3dMZWZ0OiAnQXJyb3dMZWZ0JyxcbiAgQXJyb3dEb3duOiAnQXJyb3dEb3duJyxcbiAgQXJyb3dSaWdodDogJ0Fycm93UmlnaHQnLFxufTtcblxuZXhwb3J0IGNvbnN0IGFycm93S2V5Q29kZSA9IFsnQXJyb3dVcCcsICdBcnJvd0xlZnQnLCAnQXJyb3dEb3duJywgJ0Fycm93UmlnaHQnXTtcblxuZXhwb3J0IGNvbnN0IG1hcGluZ0Fycm93cyA9IHtcbiAgQXJyb3dVcDogJ+KshicsXG4gIEFycm93TGVmdDogJ+KshScsXG4gIEFycm93RG93bjogJ+KshycsXG4gIEFycm93UmlnaHQ6ICfirpUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGlnbm9yS2V5Q29kZSA9IFtcbiAgJ0YxJyxcbiAgJ0YyJyxcbiAgJ0YzJyxcbiAgJ0Y0JyxcbiAgJ0Y1JyxcbiAgJ0Y2JyxcbiAgJ0Y3JyxcbiAgJ0Y4JyxcbiAgJ0Y5JyxcbiAgJ0YxMCcsXG4gICdGMTEnLFxuICAnQWx0UmlnaHQnLFxuICAnQWx0TGVmdCcsXG4gICdDYXBzTG9jaycsXG4gICdUYWInLFxuICAnQ29udHJvbGxMZWZ0JyxcbiAgJ0NvbnRyb2xsUmlnaHQnLFxuICAnTWV0YScsXG4gICdTaGlmdExlZnQnLFxuICAnU2hpZnRSaWdodCcsXG5dO1xuIiwiaW1wb3J0IEtleUJvYXJkVmlldyBmcm9tICcuL0tleUJvYXJkVmlldyc7XHJcbmltcG9ydCBTd2l0Y2hMYW5ndWFnZU1vZGVsIGZyb20gJy4vbW9kZWxzL1N3aXRjaExhbmd1YWdlTW9kZWwnO1xyXG5pbXBvcnQgU3dpdGNoVXBwZXJMb3dlck1vZGUgZnJvbSAnLi9tb2RlbHMvU3dpdGNoVXBwZXJMb3dlck1vZGVsJztcclxuXHJcbmNsYXNzIEtleUJvYXJkQ29udHJvbGxlciB7XHJcbiAgI2xhbmdTd2l0Y2ggPSBuZXcgU3dpdGNoTGFuZ3VhZ2VNb2RlbCgpO1xyXG5cclxuICAjdXBwZXJDYXNlU3dpdGNoID0gbmV3IFN3aXRjaFVwcGVyTG93ZXJNb2RlKCk7XHJcblxyXG4gICN2aWV3ID0gbmV3IEtleUJvYXJkVmlldyh0aGlzLiN1cHBlckNhc2VTd2l0Y2gpO1xyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy4jdmlldy5pbml0KCk7XHJcbiAgICB0aGlzLiN2aWV3LmNoYW5nZUxhbmd1YWdlKHRoaXMuI2xhbmdTd2l0Y2guTGFuZ3VhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3ZpZXcucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICAjdGVtcENvZGUgPSBudWxsO1xyXG5cclxuICAjcHJlc3NlZEtleXMgPSB7fTtcclxuXHJcbiAgaGFuZGxlckRvd25LZXkoa2V5SW5mbykge1xyXG4gICAgaWYgKCEoa2V5SW5mbyBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuI3RlbXBDb2RlICE9PSBrZXlJbmZvLmNvZGUpIHtcclxuICAgICAgdGhpcy4jdmlldy5rZXlJbGx1bWluYXRpb24oa2V5SW5mby5jb2RlKTtcclxuICAgICAgdGhpcy4jcHJlc3NlZEtleXNba2V5SW5mby5jb2RlXSA9IHRydWU7XHJcblxyXG4gICAgICBpZiAoa2V5SW5mby5rZXkgPT09ICdDYXBzTG9jaycgfHwga2V5SW5mby5rZXkgPT09ICdTaGlmdCcpIHtcclxuICAgICAgICBjb25zdCBpc1VwcGVyQ2FzZSA9IHRoaXMuI3VwcGVyQ2FzZVN3aXRjaC5kb3duKGtleUluZm8ua2V5KS5Jc1VwcGVyQ2FzZTtcclxuICAgICAgICBpZiAoaXNVcHBlckNhc2UpIHtcclxuICAgICAgICAgIHRoaXMuI3ZpZXcudXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICB0aGlzLiN2aWV3LmlzVXBwcmVjYXNlID0gaXNVcHBlckNhc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuI3ZpZXcubG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBsYW5nU3dpdGNoID0gdGhpcy4jbGFuZ1N3aXRjaC5leGVjdXRlKGtleUluZm8pO1xyXG4gICAgICBpZiAobGFuZ1N3aXRjaCkge1xyXG4gICAgICAgIHRoaXMuI3ZpZXcuY2hhbmdlTGFuZ3VhZ2UodGhpcy4jbGFuZ1N3aXRjaC5MYW5ndWFnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiN0ZW1wQ29kZSA9IGtleUluZm8uY29kZTtcclxuXHJcbiAgICB0aGlzLiN2aWV3LmRvd25LZXkoa2V5SW5mbyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVyVXBLZXkoa2V5SW5mbykge1xyXG4gICAgaWYgKCEoa2V5SW5mbyBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGtleUluZm8ua2V5ID09PSAnQ2Fwc0xvY2snIHx8IGtleUluZm8ua2V5ID09PSAnU2hpZnQnKSB7XHJcbiAgICAgIGNvbnN0IGlzVXBwZXJDYXNlID0gdGhpcy4jdXBwZXJDYXNlU3dpdGNoLnVwKCkuSXNVcHBlckNhc2U7XHJcbiAgICAgIGlmICghaXNVcHBlckNhc2UpIHtcclxuICAgICAgICB0aGlzLiN2aWV3Lmxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuI3ZpZXcuaXNVcHByZWNhc2UgPSBpc1VwcGVyQ2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvZGUgPSBrZXlJbmZvLmNvZGU7XHJcbiAgICBkZWxldGUgdGhpcy4jcHJlc3NlZEtleXNba2V5SW5mby5jb2RlXTtcclxuICAgIHRoaXMuI3ZpZXcua2V5SWxsdW1pbmF0aW9uT2ZmKGNvZGUpO1xyXG4gICAgdGhpcy4jdGVtcENvZGUgPSBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5Qm9hcmRDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgVmlydHVhbEtleWJvYXJkRXZlbnQgZnJvbSAnLi4vLi4vRXZlbnRzL1ZpcnR1YWxLZXlib2FyZEV2ZW50JztcclxuaW1wb3J0IGJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJztcclxuaW1wb3J0IFN3aXRjaFVwcGVyTG93ZXJNb2RlIGZyb20gJy4vbW9kZWxzL1N3aXRjaFVwcGVyTG93ZXJNb2RlbCc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbmNsYXNzIEtleUJvYXJkVmlldyB7XHJcbiAgI3Jvb3QgPSBudWxsO1xyXG5cclxuICAjbW9kZWw7XHJcblxyXG4gICNidXR0b25zID0gW107XHJcblxyXG4gICNkYXRhS2V5U3RhdGUgPSB7XHJcbiAgICBjdXJyOiAnZGF0YS1rZXktZW5nJyxcclxuICAgIHN3aXRjaChsYW5nKSB7XHJcbiAgICAgIHRoaXMuY3VyciA9IGBkYXRhLWtleS0ke2xhbmd9YDtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcclxuICAgIGlmIChtb2RlbCBpbnN0YW5jZW9mIFN3aXRjaFVwcGVyTG93ZXJNb2RlKSB7XHJcbiAgICAgIHRoaXMuI21vZGVsID0gbW9kZWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy4jcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXJ0dWFsLWtleWJvYXJkJyk7XHJcbiAgICB0aGlzLiNidXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKV07XHJcblxyXG4gICAgdGhpcy4jcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLiNoYW5kbGVyQ2xpY2tEb3duKTtcclxuICAgIHRoaXMuI3Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuI2hhbmRsZXJDbGlja1VwKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ2aXJ0dWFsLWtleWJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aXJ0dWFsLWtleWJvYXJkX19kcmF3LXJvd1wiPlxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnQmFja3F1b3RlJywga2V5OiAnYCcsIGRhdGFFbmc6ICdgficsIGRhdGFSdXM6ICfRkdCBJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0RpZ2l0MScsIGtleTogJzEnLCBkYXRhRW5nOiAnMSEnLCBkYXRhUnVzOiAnMSEnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnRGlnaXQyJywga2V5OiAnMicsIGRhdGFFbmc6ICcyQCcsIGRhdGFSdXM6ICcyJnF1b3Q7JyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0RpZ2l0MycsIGtleTogJzMnLCBkYXRhRW5nOiAnMyMnLCBkYXRhUnVzOiAnM+KElicgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdEaWdpdDQnLCBrZXk6ICc0JywgZGF0YUVuZzogJzQkJywgZGF0YVJ1czogJzQ7JyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0RpZ2l0NScsIGtleTogJzUnLCBkYXRhRW5nOiAnNSUnLCBkYXRhUnVzOiAnNSUnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnRGlnaXQ2Jywga2V5OiAnNicsIGRhdGFFbmc6ICc2XicsIGRhdGFSdXM6ICc2OicgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdEaWdpdDcnLCBrZXk6ICc3JywgZGF0YUVuZzogJzcmJywgZGF0YVJ1czogJzc/JyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0RpZ2l0OCcsIGtleTogJzgnLCBkYXRhRW5nOiAnOConLCBkYXRhUnVzOiAnOConIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnRGlnaXQ5Jywga2V5OiAnOScsIGRhdGFFbmc6ICc5KCcsIGRhdGFSdXM6ICc5KCcgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdEaWdpdDAnLCBrZXk6ICcwJywgZGF0YUVuZzogJzApJywgZGF0YVJ1czogJzApJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ01pbnVzJywga2V5OiAnLScsIGRhdGFFbmc6ICctXycsIGRhdGFSdXM6ICctXycgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdFcXVhbCcsIGtleTogJz0nLCBkYXRhRW5nOiAnPSsnLCBkYXRhUnVzOiAnPSsnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7XHJcbiAgICAgICAgICAgICAgaWQ6ICdCYWNrc3BhY2UnLFxyXG4gICAgICAgICAgICAgIGtleTogJ0JhY2tzcGFjZScsXHJcbiAgICAgICAgICAgICAgZGF0YUVuZzogJ0JhY2tzcGFjZScsXHJcbiAgICAgICAgICAgICAgZGF0YVJ1czogJ0JhY2tzcGFjZScsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aXJ0dWFsLWtleWJvYXJkX19kcmF3LXJvd1wiPlxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnVGFiJywga2V5OiAnVGFiJywgZGF0YUVuZzogJ1RhYicsIGRhdGFSdXM6ICdUYWInIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5UScsIGtleTogJ3EnLCBkYXRhRW5nOiAncVEnLCBkYXRhUnVzOiAn0LnQmScgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdLZXlXJywga2V5OiAndycsIGRhdGFFbmc6ICd3VycsIGRhdGFSdXM6ICfRhtCmJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0tleUUnLCBrZXk6ICdlJywgZGF0YUVuZzogJ2VFJywgZGF0YVJ1czogJ9GD0KMnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5UicsIGtleTogJ3InLCBkYXRhRW5nOiAnclInLCBkYXRhUnVzOiAn0LrQmicgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdLZXlUJywga2V5OiAndCcsIGRhdGFFbmc6ICd0VCcsIGRhdGFSdXM6ICfQtdCVJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0tleVknLCBrZXk6ICd5JywgZGF0YUVuZzogJ3lZJywgZGF0YVJ1czogJ9C90J0nIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5VScsIGtleTogJ3UnLCBkYXRhRW5nOiAndVUnLCBkYXRhUnVzOiAn0LPQkycgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdLZXlJJywga2V5OiAnaScsIGRhdGFFbmc6ICdpSScsIGRhdGFSdXM6ICfRiNCoJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0tleU8nLCBrZXk6ICdvJywgZGF0YUVuZzogJ29PJywgZGF0YVJ1czogJ9GJ0KknIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5UCcsIGtleTogJ3AnLCBkYXRhRW5nOiAncFAnLCBkYXRhUnVzOiAn0LfQlycgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdCcmFja2V0TGVmdCcsIGtleTogJ1snLCBkYXRhRW5nOiAnW3snLCBkYXRhUnVzOiAn0YXQpScgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdCcmFja2V0UmlnaHQnLCBrZXk6ICddJywgZGF0YUVuZzogJ119JywgZGF0YVJ1czogJ9GK0KonIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnQmFja3NsYXNoJywga2V5OiAnXFxcXCcsIGRhdGFFbmc6ICdcXFxcfCcsIGRhdGFSdXM6ICdcXFxcLycgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdEZWxldGUnLCBrZXk6ICdEZWwnLCBkYXRhRW5nOiAnRGVsZXRlJywgZGF0YVJ1czogJ0RlbGV0ZScgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpcnR1YWwta2V5Ym9hcmRfX2RyYXctcm93XCI+XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdDYXBzTG9jaycsIGtleTogJ0NhcHNMb2NrJywgZGF0YUVuZzogJ0NhcHNMb2NrJywgZGF0YVJ1czogJ0NhcHNMb2NrJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0tleUEnLCBrZXk6ICdhJywgZGF0YUVuZzogJ2FBJywgZGF0YVJ1czogJ9GE0KQnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5UycsIGtleTogJ3MnLCBkYXRhRW5nOiAnc1MnLCBkYXRhUnVzOiAn0YvQqycgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdLZXlEJywga2V5OiAnZCcsIGRhdGFFbmc6ICdkRCcsIGRhdGFSdXM6ICfQstCSJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0tleUYnLCBrZXk6ICdmJywgZGF0YUVuZzogJ2ZGJywgZGF0YVJ1czogJ9Cw0JAnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5RycsIGtleTogJ2cnLCBkYXRhRW5nOiAnZ0cnLCBkYXRhUnVzOiAn0L/QnycgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdLZXlIJywga2V5OiAnaCcsIGRhdGFFbmc6ICdoSCcsIGRhdGFSdXM6ICfRgNCgJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0tleUonLCBrZXk6ICdqJywgZGF0YUVuZzogJ2pKJywgZGF0YVJ1czogJ9C+0J4nIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5SycsIGtleTogJ2snLCBkYXRhRW5nOiAna0snLCBkYXRhUnVzOiAn0LvQmycgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdLZXlMJywga2V5OiAnbCcsIGRhdGFFbmc6ICdsTCcsIGRhdGFSdXM6ICfQtNCUJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ1NlbWljb2xvbicsIGtleTogJzsnLCBkYXRhRW5nOiAnOzonLCBkYXRhUnVzOiAn0LbQlicgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdRdW90ZScsIGtleTogJyZzYnF1bzsnLCBkYXRhRW5nOiAnJnNicXVvOzsmcXVvdDsnLCBkYXRhUnVzOiAn0Y3QrScgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdFbnRlcicsIGtleTogJ0VudGVyJywgZGF0YUVuZzogJ0VudGVyJywgZGF0YVJ1czogJ0VudGVyJyB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlydHVhbC1rZXlib2FyZF9fZHJhdy1yb3dcIj5cclxuICAgICAgICAgICAgJHtidXR0b24oe1xyXG4gICAgICAgICAgICAgIGlkOiAnU2hpZnRMZWZ0JyxcclxuICAgICAgICAgICAgICBrZXk6ICdTaGlmdCcsXHJcbiAgICAgICAgICAgICAgZGF0YUVuZzogJ1NoaWZ0TGVmdCcsXHJcbiAgICAgICAgICAgICAgZGF0YVJ1czogJ1NoaWZ0TGVmdCcsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5WicsIGtleTogJ3onLCBkYXRhRW5nOiAnelonLCBkYXRhUnVzOiAn0Y/QrycgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdLZXlYJywga2V5OiAneCcsIGRhdGFFbmc6ICd4WCcsIGRhdGFSdXM6ICfRh9CnJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0tleUMnLCBrZXk6ICdjJywgZGF0YUVuZzogJ2NDJywgZGF0YVJ1czogJ9GB0KEnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5VicsIGtleTogJ3YnLCBkYXRhRW5nOiAndlYnLCBkYXRhUnVzOiAn0LzQnCcgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdLZXlCJywga2V5OiAnYicsIGRhdGFFbmc6ICdiQicsIGRhdGFSdXM6ICfQuNCYJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0tleU4nLCBrZXk6ICduJywgZGF0YUVuZzogJ25OJywgZGF0YVJ1czogJ9GC0KInIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnS2V5TScsIGtleTogJ20nLCBkYXRhRW5nOiAnbU0nLCBkYXRhUnVzOiAn0YzQrCcgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdDb21tYScsIGtleTogJywnLCBkYXRhRW5nOiAnLDwnLCBkYXRhUnVzOiAn0LHQkScgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdQZXJpb2QnLCBrZXk6ICcuJywgZGF0YUVuZzogJy4+JywgZGF0YVJ1czogJ9GO0K4nIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnU2xhc2gnLCBrZXk6ICcvJywgZGF0YUVuZzogJy8/JywgZGF0YVJ1czogJy4sJyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oe1xyXG4gICAgICAgICAgICAgIGlkOiAnQXJyb3dVcCcsXHJcbiAgICAgICAgICAgICAga2V5OiAn4qyGJyxcclxuICAgICAgICAgICAgICBkYXRhRW5nOiAn4qyGJyxcclxuICAgICAgICAgICAgICBkYXRhUnVzOiAn4qyGJyxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHtcclxuICAgICAgICAgICAgICBpZDogJ1NoaWZ0UmlnaHQnLFxyXG4gICAgICAgICAgICAgIGtleTogJ1NoaWZ0JyxcclxuICAgICAgICAgICAgICBkYXRhRW5nOiAnU2hpZnRSaWdodCcsXHJcbiAgICAgICAgICAgICAgZGF0YVJ1czogJ1NoaWZ0UmlnaHQnLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlydHVhbC1rZXlib2FyZF9fZHJhdy1yb3dcIj5cclxuICAgICAgICAgICAgJHtidXR0b24oeyBpZDogJ0NvbnRyb2xMZWZ0Jywga2V5OiAnQ3RybCcsIGRhdGFFbmc6ICdDdHJsJywgZGF0YVJ1czogJ0N0cmwnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnTWV0YUxlZnQnLCBrZXk6ICdXaW4nLCBkYXRhRW5nOiAnV2luJywgZGF0YVJ1czogJ1dpbicgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdBbHRMZWZ0Jywga2V5OiAnQWx0JywgZGF0YUVuZzogJ0FsdCcsIGRhdGFSdXM6ICdBbHQnIH0pfVxyXG4gICAgICAgICAgICAke2J1dHRvbih7IGlkOiAnU3BhY2UnLCBrZXk6ICcgJywgZGF0YUVuZzogJyAnLCBkYXRhUnVzOiAnICcgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdBbHRSaWdodCcsIGtleTogJ0FsdCcsIGRhdGFFbmc6ICdBbHQnLCBkYXRhUnVzOiAnQWx0JyB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oe1xyXG4gICAgICAgICAgICAgIGlkOiAnQXJyb3dMZWZ0JyxcclxuICAgICAgICAgICAgICBrZXk6ICfirIUnLFxyXG4gICAgICAgICAgICAgIGRhdGFFbmc6ICfirIUnLFxyXG4gICAgICAgICAgICAgIGRhdGFSdXM6ICfirIUnLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oe1xyXG4gICAgICAgICAgICAgIGlkOiAnQXJyb3dEb3duJyxcclxuICAgICAgICAgICAgICBrZXk6ICfirIcnLFxyXG4gICAgICAgICAgICAgIGRhdGFFbmc6ICfirIcnLFxyXG4gICAgICAgICAgICAgIGRhdGFSdXM6ICfirIcnLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgJHtidXR0b24oe1xyXG4gICAgICAgICAgICAgIGlkOiAnQXJyb3dSaWdodCcsXHJcbiAgICAgICAgICAgICAga2V5OiAn4q6VJyxcclxuICAgICAgICAgICAgICBkYXRhRW5nOiAn4q6VJyxcclxuICAgICAgICAgICAgICBkYXRhUnVzOiAn4q6VJyxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICR7YnV0dG9uKHsgaWQ6ICdDb250cm9sUmlnaHQnLCBrZXk6ICdDdHJsJywgZGF0YUVuZzogJ0N0cmwnLCBkYXRhUnVzOiAnQ3RybCcgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBgO1xyXG4gIH1cclxuXHJcbiAgI3RlbXBCdG4gPSBudWxsO1xyXG5cclxuICBpc1VwcHJlY2FzZSA9IGZhbHNlO1xyXG5cclxuICAjaGFuZGxlckNsaWNrRG93biA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgY29uc3QgYnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5idG4nKTtcclxuICAgIGlmIChidG4gPT09IG51bGwpIHJldHVybjtcclxuICAgIHRoaXMuI3RlbXBCdG4gPSBidG47XHJcbiAgICBjb25zdCBjb2RlID0gYnRuLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIGNvbnN0IGtleSA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcuYnRuX19rZXknKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBpZiAodGhpcy4jbW9kZWwgaW5zdGFuY2VvZiBTd2l0Y2hVcHBlckxvd2VyTW9kZSkge1xyXG4gICAgICBpZiAoY29kZSA9PT0gJ0NhcHNMb2NrJyB8fCBrZXkgPT09ICdTaGlmdCcpIHtcclxuICAgICAgICBjb25zdCBpc1VwcGVyQ2FzZSA9IHRoaXMuI21vZGVsLmRvd24oa2V5KS5Jc1VwcGVyQ2FzZTtcclxuICAgICAgICBpZiAoaXNVcHBlckNhc2UpIHtcclxuICAgICAgICAgIHRoaXMudXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXlJbGx1bWluYXRpb24oY29kZSk7XHJcbiAgICBWaXJ0dWFsS2V5Ym9hcmRFdmVudC5jdXJyZW50LmVtaXQoeyBjb2RlLCBrZXkgfSk7XHJcbiAgfTtcclxuXHJcbiAgI2hhbmRsZXJDbGlja1VwID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAodGhpcy4jdGVtcEJ0biA9PT0gbnVsbCB8fCB0aGlzLiN0ZW1wQnRuID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcclxuICAgIGNvbnN0IGJ0biA9IHRhcmdldC5jbG9zZXN0KCcuYnRuJyk7XHJcbiAgICBpZiAoYnRuID09PSBudWxsKSByZXR1cm47XHJcbiAgICB0aGlzLiN0ZW1wQnRuID0gYnRuO1xyXG4gICAgY29uc3QgY29kZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICBjb25zdCBrZXkgPSBidG4ucXVlcnlTZWxlY3RvcignLmJ0bl9fa2V5JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgaWYgKGNvZGUgPT09ICdDYXBzTG9jaycgfHwga2V5ID09PSAnU2hpZnQnKSB7XHJcbiAgICAgIGNvbnN0IGlzVXBwZXJDYXNlID0gdGhpcy4jbW9kZWwudXAoKS5Jc1VwcGVyQ2FzZTtcclxuICAgICAgaWYgKCFpc1VwcGVyQ2FzZSkge1xyXG4gICAgICAgIHRoaXMubG93ZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmtleUlsbHVtaW5hdGlvbk9mZihjb2RlKTtcclxuXHJcbiAgICB0aGlzLiN0ZW1wQnRuID0gbnVsbDtcclxuICB9O1xyXG5cclxuICBkb3duS2V5KGluZm8pIHtcclxuICAgIGlmICghKGluZm8gaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgY29kZSB9ID0gaW5mbztcclxuICAgIGNvbnN0IGZpbmRCdG4gPSB0aGlzLiNidXR0b25zLmZpbmQoKGJ0bikgPT4gYnRuLmlkID09PSBjb2RlKTtcclxuXHJcbiAgICBpZiAoZmluZEJ0bikge1xyXG4gICAgICBjb25zdCBrZXkgPSBmaW5kQnRuLnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2tleScpLnRleHRDb250ZW50O1xyXG4gICAgICBWaXJ0dWFsS2V5Ym9hcmRFdmVudC5jdXJyZW50LmVtaXQoeyBjb2RlLCBrZXkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlJbGx1bWluYXRpb24oY29kZSkge1xyXG4gICAgY29uc3QgZmluZEJ0biA9IHRoaXMuI2J1dHRvbnMuZmluZCgoYnRuKSA9PiBidG4uaWQgPT09IGNvZGUpO1xyXG5cclxuICAgIGlmIChmaW5kQnRuKSB7XHJcbiAgICAgIGZpbmRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncHJlc3NlZC0tYnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlJbGx1bWluYXRpb25PZmYoY29kZSkge1xyXG4gICAgY29uc3QgaWdub3IgPSAnQ2Fwc0xvY2snO1xyXG4gICAgaWYgKGNvZGUgPT09IGlnbm9yKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZmluZEJ0biA9IHRoaXMuI2J1dHRvbnMuZmluZCgoYnRuKSA9PiBidG4uaWQgPT09IGNvZGUpO1xyXG4gICAgaWYgKGZpbmRCdG4pIHtcclxuICAgICAgZmluZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkLS1idXR0b24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwcGVyQ2FzZSgpIHtcclxuICAgIHRoaXMuI2J1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLiNtYXRjaChidG4uaWQpKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGF0dHJpYiA9IGJ0bi5nZXRBdHRyaWJ1dGUoYCR7dGhpcy4jZGF0YUtleVN0YXRlLmN1cnJ9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhdHRyaWIuc3BsaXQoJycpO1xyXG4gICAgICBjb25zdCBrZXkgPSBidG4ucXVlcnlTZWxlY3RvcignLmJ0bl9fa2V5Jyk7XHJcbiAgICAgIGtleS50ZXh0Q29udGVudCA9IGRhdGFbMV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvd2VyQ2FzZSgpIHtcclxuICAgIHRoaXMuI2J1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLiNtYXRjaChidG4uaWQpKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGF0dHJpYiA9IGJ0bi5nZXRBdHRyaWJ1dGUoYCR7dGhpcy4jZGF0YUtleVN0YXRlLmN1cnJ9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhdHRyaWIuc3BsaXQoJycpO1xyXG4gICAgICBjb25zdCBrZXkgPSBidG4ucXVlcnlTZWxlY3RvcignLmJ0bl9fa2V5Jyk7XHJcbiAgICAgIGtleS50ZXh0Q29udGVudCA9IGRhdGFbMF07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUxhbmd1YWdlKGxhbmcpIHtcclxuICAgIGxldCBsYSA9IGxhbmc7XHJcbiAgICBpZiAobGFuZyA9PT0gdW5kZWZpbmVkKSBsYSA9ICdlbmcnO1xyXG4gICAgaWYgKGxhbmcgIT09ICdlbmcnICYmIGxhbmcgIT09ICdydXMnKSBsYSA9ICdlbmcnO1xyXG5cclxuICAgIHRoaXMuI2J1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLiNtYXRjaChidG4uaWQpKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGF0dHJpYiA9IGJ0bi5nZXRBdHRyaWJ1dGUoYGRhdGEta2V5LSR7bGF9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhdHRyaWIuc3BsaXQoJycpO1xyXG4gICAgICBjb25zdCBrZXkgPSBidG4ucXVlcnlTZWxlY3RvcignLmJ0bl9fa2V5Jyk7XHJcbiAgICAgIGtleS50ZXh0Q29udGVudCA9IGRhdGFbMF07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuI2RhdGFLZXlTdGF0ZS5zd2l0Y2gobGEpO1xyXG4gIH1cclxuXHJcbiAgI21hdGNoKHN0cikge1xyXG4gICAgY29uc3QgYXJyID0gW1xyXG4gICAgICAnQmFja3NwYWNlJyxcclxuICAgICAgJ1RhYicsXHJcbiAgICAgICdEZWxldGUnLFxyXG4gICAgICAnQ2Fwc0xvY2snLFxyXG4gICAgICAnRW50ZXInLFxyXG4gICAgICAnU2hpZnRMZWZ0JyxcclxuICAgICAgJ1NoaWZ0UmlnaHQnLFxyXG4gICAgICAnQ29udHJvbExlZnQnLFxyXG4gICAgICAnQ29udHJvbFJpZ2h0JyxcclxuICAgICAgJ01ldGFMZWZ0JyxcclxuICAgICAgJ0FsdExlZnQnLFxyXG4gICAgICAnQWx0UmlnaHQnLFxyXG4gICAgICAnQXJyb3dMZWZ0JyxcclxuICAgICAgJ0Fycm93VXAnLFxyXG4gICAgICAnQXJyb3dEb3duJyxcclxuICAgICAgJ0Fycm93UmlnaHQnLFxyXG4gICAgXTtcclxuICAgIGlmIChhcnIuaW5jbHVkZXMoc3RyKSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXlCb2FyZFZpZXc7XHJcbiIsImltcG9ydCAnLi9idXR0b24uc2Nzcyc7XHJcblxyXG5jb25zdCBjaGVjayA9IFtcclxuICAnQmFja3NwYWNlJyxcclxuICAnVGFiJyxcclxuICAnRGVsZXRlJyxcclxuICAnQ2Fwc0xvY2snLFxyXG4gICdFbnRlcicsXHJcbiAgJ1NoaWZ0TGVmdCcsXHJcbiAgJ1NoaWZ0UmlnaHQnLFxyXG4gICdDb250cm9sTGVmdCcsXHJcbiAgJ0NvbnRyb2xSaWdodCcsXHJcbiAgJ01ldGFMZWZ0JyxcclxuICAnQWx0TGVmdCcsXHJcbiAgJ0FsdFJpZ2h0JyxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbihidXR0b25UeXBlKSB7XHJcbiAgY29uc3QgeyBpZCwga2V5LCBkYXRhRW5nLCBkYXRhUnVzIH0gPSBidXR0b25UeXBlO1xyXG5cclxuICBjb25zdCBjbGFzc05hbWVNb2QgPVxyXG4gICAgaWQgPT09IGNoZWNrLmZpbmQoKGl0ZW0pID0+IGl0ZW0gPT09IGlkKSA/ICdtZWRpdW0nIDogaWQgPT09ICdTcGFjZScgPyAnbGFyZ2UnIDogJyc7XHJcblxyXG4gIHJldHVybiBgXHJcbiAgICA8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cImJ0biAke2NsYXNzTmFtZU1vZH1cIiBkYXRhLWtleS1lbmc9XCIke2RhdGFFbmd9XCIgZGF0YS1rZXktcnVzPVwiJHtkYXRhUnVzfVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuX19rZXlcIj4ke2tleX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbjtcclxuIiwiY2xhc3MgU3dpdGNoTGFuZ3VhZ2VNb2RlbCB7XG4gICNsYW5nU3RhdGUgPSB7XG4gICAgY3VycjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0xhbmd1YWdlJykgfHwgJ2VuZycsXG4gICAgc3dpdGNoKCkge1xuICAgICAgaWYgKHRoaXMuY3VyciA9PT0gJ2VuZycpIHtcbiAgICAgICAgdGhpcy5jdXJyID0gJ3J1cyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnIgPSAnZW5nJztcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIGdldCBMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGFuZ1N0YXRlLmN1cnI7XG4gIH1cblxuICBleGVjdXRlKGtleUluZm8pIHtcbiAgICBpZiAoIShrZXlJbmZvIGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmICghKGtleUluZm8uc2hpZnRLZXkgJiYga2V5SW5mby5jdHJsS2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuI2xhbmdTdGF0ZS5zd2l0Y2goKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTGFuZ3VhZ2UnLCB0aGlzLiNsYW5nU3RhdGUuY3Vycik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoTGFuZ3VhZ2VNb2RlbDtcbiIsImNsYXNzIFN3aXRjaFVwcGVyTG93ZXJNb2RlIHtcbiAgI2lzQ2Fwc0xvY2sgPSBmYWxzZTtcblxuICAjaXNTaGlmdCA9IGZhbHNlO1xuXG4gICN1cHBlckNhc2UgPSBmYWxzZTtcblxuICBnZXQgSXNVcHBlckNhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VwcGVyQ2FzZTtcbiAgfVxuXG4gIGRvd24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSAnU2hpZnQnKSB0aGlzLiNpc1NoaWZ0ID0gdHJ1ZTtcbiAgICBpZiAoY29kZSA9PT0gJ0NhcHNMb2NrJykgdGhpcy4jaXNDYXBzTG9jayA9ICF0aGlzLiNpc0NhcHNMb2NrO1xuXG4gICAgaWYgKHRoaXMuI2lzQ2Fwc0xvY2spIHtcbiAgICAgIHRoaXMuI3VwcGVyQ2FzZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI3VwcGVyQ2FzZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNpc0NhcHNMb2NrID09PSBmYWxzZSAmJiB0aGlzLiNpc1NoaWZ0ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiN1cHBlckNhc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXAoKSB7XG4gICAgaWYgKHRoaXMuI2lzU2hpZnQgJiYgdGhpcy4jaXNDYXBzTG9jayA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuI3VwcGVyQ2FzZSA9IGZhbHNlO1xuICAgICAgdGhpcy4jaXNTaGlmdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFVwcGVyTG93ZXJNb2RlO1xuIiwiY2xhc3MgQmFzZUNvbW1hbmQge1xyXG4gICNtZXRob2RzID0gWydCYWNrc3BhY2UnLCAnRGVsZXRlJywgJ0VudGVyJywgJ1RhYiddO1xyXG5cclxuICAjaWdub3JlZCA9IFtcclxuICAgICdTaGlmdExlZnQnLFxyXG4gICAgJ1NoaWZ0UmlnaHQnLFxyXG4gICAgJ0NhcHNMb2NrJyxcclxuICAgICdDb250cm9sTGVmdCcsXHJcbiAgICAnQ29udHJvbFJpZ2h0JyxcclxuICAgICdBbHRMZWZ0JyxcclxuICAgICdBbHRSaWdodCcsXHJcbiAgICAnTWV0YUxlZnQnLFxyXG4gICAgJ01ldGFSaWdodCcsXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcclxuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGUobWV0aG9kKSB7XHJcbiAgICBpZiAoIShtZXRob2QgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSAmJiAhKHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnKSkgcmV0dXJuO1xyXG4gICAgY29uc3QgeyBrZXksIGNvZGUgfSA9IG1ldGhvZDtcclxuICAgIGlmICh0aGlzLiNpZ25vcmVkLmluY2x1ZGVzKGNvZGUpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZmluZE1ldGhvZCA9IHRoaXMuI21ldGhvZHMuZmluZCgoZWxlbSkgPT4gZWxlbSA9PT0gY29kZSk7XHJcblxyXG4gICAgaWYgKGZpbmRNZXRob2QpIHtcclxuICAgICAgdGhpcy4jbWF0Y2hDb21tYW5kKGZpbmRNZXRob2QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4jY2hhckFkZChrZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI21hdGNoQ29tbWFuZChjb21tYW5kKSB7XHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgY2FzZSAnQmFja3NwYWNlJzpcclxuICAgICAgICB0aGlzLiNiYWNrU3BhY2VDb21tYW5kKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1RhYic6XHJcbiAgICAgICAgdGhpcy4jdGFiQ29tbWFuZCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdEZWxldGUnOlxyXG4gICAgICAgIHRoaXMuI2RlbGV0ZUNvbW1hbmQoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICB0aGlzLiNlbnRlckNvbW1hbmQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNjaGFyQWRkKGNoYXIpIHtcclxuICAgIGlmICghKHRoaXMuaW5wdXQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSkgcmV0dXJuO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uRW5kID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XHJcbiAgICBjb25zdCB0ZXh0QmVmb3JlU2VsZWN0aW9uID0gdGhpcy5pbnB1dC52YWx1ZS5zbGljZSgwLCBzZWxlY3Rpb25TdGFydCk7XHJcbiAgICBjb25zdCB0ZXh0QWZ0ZXJTZWxlY3Rpb24gPSB0aGlzLmlucHV0LnZhbHVlLnNsaWNlKHNlbGVjdGlvbkVuZCk7XHJcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGV4dEJlZm9yZVNlbGVjdGlvbiArIGNoYXIgKyB0ZXh0QWZ0ZXJTZWxlY3Rpb247XHJcbiAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0ICsgMSwgc2VsZWN0aW9uU3RhcnQgKyAxKTtcclxuICB9XHJcblxyXG4gICNlbnRlckNvbW1hbmQoKSB7XHJcbiAgICBpZiAoISh0aGlzLmlucHV0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkpIHJldHVybjtcclxuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IHRleHRCZWZvcmVDdXJzb3IgPSB0aGlzLmlucHV0LnZhbHVlLnNsaWNlKDAsIGN1cnNvclBvc2l0aW9uKTtcclxuICAgIGNvbnN0IHRleHRBZnRlckN1cnNvciA9IHRoaXMuaW5wdXQudmFsdWUuc2xpY2UoY3Vyc29yUG9zaXRpb24pO1xyXG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IGAke3RleHRCZWZvcmVDdXJzb3J9XFxuJHt0ZXh0QWZ0ZXJDdXJzb3J9YDtcclxuICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yUG9zaXRpb24gKyAxLCBjdXJzb3JQb3NpdGlvbiArIDEpO1xyXG4gIH1cclxuXHJcbiAgI2JhY2tTcGFjZUNvbW1hbmQoKSB7XHJcbiAgICBpZiAoISh0aGlzLmlucHV0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkpIHJldHVybjtcclxuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uU3RhcnQgPSB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb25FbmQgPSB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcclxuICAgIGNvbnN0IHRleHRCZWZvcmVDdXJzb3IgPSB0aGlzLmlucHV0LnZhbHVlLnNsaWNlKDAsIGN1cnNvclBvc2l0aW9uU3RhcnQpO1xyXG4gICAgY29uc3QgdGV4dEFmdGVyQ3Vyc29yID0gdGhpcy5pbnB1dC52YWx1ZS5zbGljZShjdXJzb3JQb3NpdGlvbkVuZCk7XHJcbiAgICBpZiAoY3Vyc29yUG9zaXRpb25TdGFydCA9PT0gY3Vyc29yUG9zaXRpb25FbmQpIHtcclxuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRleHRCZWZvcmVDdXJzb3Iuc2xpY2UoMCwgLTEpICsgdGV4dEFmdGVyQ3Vyc29yO1xyXG4gICAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKGN1cnNvclBvc2l0aW9uU3RhcnQgLSAxLCBjdXJzb3JQb3NpdGlvblN0YXJ0IC0gMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGV4dEJlZm9yZUN1cnNvciArIHRleHRBZnRlckN1cnNvcjtcclxuICAgICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3JQb3NpdGlvblN0YXJ0LCBjdXJzb3JQb3NpdGlvblN0YXJ0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICN0YWJDb21tYW5kKCkge1xyXG4gICAgaWYgKCEodGhpcy5pbnB1dCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpKSByZXR1cm47XHJcbiAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBjb25zdCB0ZXh0QmVmb3JlQ3Vyc29yID0gdGhpcy5pbnB1dC52YWx1ZS5zbGljZSgwLCBjdXJzb3JQb3NpdGlvbik7XHJcbiAgICBjb25zdCB0ZXh0QWZ0ZXJDdXJzb3IgPSB0aGlzLmlucHV0LnZhbHVlLnNsaWNlKGN1cnNvclBvc2l0aW9uKTtcclxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSBgJHt0ZXh0QmVmb3JlQ3Vyc29yfSAgICAke3RleHRBZnRlckN1cnNvcn1gO1xyXG4gICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3JQb3NpdGlvbiArIDQsIGN1cnNvclBvc2l0aW9uICsgNCk7XHJcbiAgfVxyXG5cclxuICAjZGVsZXRlQ29tbWFuZCgpIHtcclxuICAgIGlmICghKHRoaXMuaW5wdXQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSkgcmV0dXJuO1xyXG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb25TdGFydCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBjb25zdCBjdXJzb3JQb3NpdGlvbkVuZCA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xyXG4gICAgY29uc3QgdGV4dEJlZm9yZUN1cnNvciA9IHRoaXMuaW5wdXQudmFsdWUuc2xpY2UoMCwgY3Vyc29yUG9zaXRpb25TdGFydCk7XHJcbiAgICBjb25zdCB0ZXh0QWZ0ZXJDdXJzb3IgPSB0aGlzLmlucHV0LnZhbHVlLnNsaWNlKGN1cnNvclBvc2l0aW9uRW5kKTtcclxuICAgIGlmIChjdXJzb3JQb3NpdGlvblN0YXJ0ID09PSBjdXJzb3JQb3NpdGlvbkVuZCkge1xyXG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGV4dEJlZm9yZUN1cnNvciArIHRleHRBZnRlckN1cnNvci5zbGljZSgxKTtcclxuICAgICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3JQb3NpdGlvblN0YXJ0LCBjdXJzb3JQb3NpdGlvblN0YXJ0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0ZXh0QmVmb3JlQ3Vyc29yICsgdGV4dEFmdGVyQ3Vyc29yO1xyXG4gICAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKGN1cnNvclBvc2l0aW9uU3RhcnQsIGN1cnNvclBvc2l0aW9uU3RhcnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbW1hbmQ7XHJcbiIsImltcG9ydCB7IGFycm93S2V5Q29kZSB9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscyc7XHJcbmltcG9ydCBWaXJ0dWFsS2V5Ym9hcmRFdmVudCBmcm9tICcuLi8uLi9FdmVudHMvVmlydHVhbEtleWJvYXJkRXZlbnQnO1xyXG5pbXBvcnQgQmFzZUNvbW1hbmQgZnJvbSAnLi9Db21tYW5kL0Jhc2VDb21tYW5kJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxuY2xhc3MgVGV4dEFyZWFJbnB1dCB7XHJcbiAgI2NvbW1hbmQ7XHJcblxyXG4gICNpc0ZvY3VzID0gdHJ1ZTtcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1hcmVhJyk7XHJcbiAgICB0aGlzLiNjb21tYW5kID0gbmV3IEJhc2VDb21tYW5kKHJvb3QpO1xyXG4gICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVyVGV4dEFyZWEpO1xyXG4gICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlclRleHRBcmVhVXApO1xyXG4gICAgLy8gcm9vdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuI2hhbmRsZXJGb2N1cyk7XHJcbiAgICAvLyByb290LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy4jaGFuZGxlckZvY3Vzb3V0KTtcclxuICAgIHJvb3QuZm9jdXMoKTtcclxuICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgcm9vdC5mb2N1cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgVmlydHVhbEtleWJvYXJkRXZlbnQuY3VycmVudC5zdWJzY3JpYmUodGhpcy4jaGFuZGxlclZpcnR1YWxLZXlib2FyZCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gJzx0ZXh0YXJlYSBjbGFzcz1cInRleHQtYXJlYVwiPjwvdGV4dGFyZWE+JztcclxuICB9XHJcblxyXG4gICNpc0Fycm9kRGF0YSA9IGZhbHNlO1xyXG5cclxuICAjaGFuZGxlclZpcnR1YWxLZXlib2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgICBpZiAodGhpcy4jaXNBcnJvZERhdGEpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy4jY29tbWFuZCBpbnN0YW5jZW9mIEJhc2VDb21tYW5kKSB7XHJcbiAgICAgIHRoaXMuI2NvbW1hbmQuZXhlY3V0ZShkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVyVGV4dEFyZWEgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkpIHJldHVybjtcclxuICAgIGNvbnN0IHsgY29kZSB9ID0gZXZlbnQ7XHJcbiAgICBpZiAoYXJyb3dLZXlDb2RlLmluY2x1ZGVzKGNvZGUpKSB7XHJcbiAgICAgIHRoaXMuI2lzQXJyb2REYXRhID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdGMTInKSByZXR1cm47XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVyVGV4dEFyZWFVcCA9ICgpID0+IHtcclxuICAgIHRoaXMuI2lzQXJyb2REYXRhID0gZmFsc2U7XHJcblxyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICAvLyAjaGFuZGxlckZvY3VzID0gKCkgPT4ge1xyXG4gIC8vICAgdGhpcy4jaXNGb2N1cyA9IHRydWU7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gI2hhbmRsZXJGb2N1c291dCA9ICgpID0+IHtcclxuICAvLyAgIHRoaXMuI2lzRm9jdXMgPSBmYWxzZTtcclxuICAvLyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYUlucHV0O1xyXG4iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBUaXRsZSh0ZXh0KSB7XHJcbiAgcmV0dXJuIGA8cCBjbGFzcz1cInRleHRcIj4ke3RleHR9PC8+YDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaWdub3JLZXlDb2RlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IEtleUJvYXJkQ29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMva2V5Ym9hcmQvS2V5Qm9hcmRDb250cm9sbGVyJztcbmltcG9ydCBUZXh0QXJlYUlucHV0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS9UZXh0QXJlYUlucHV0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuL2NvbXBvbmVudHMvdGl0bGUvVGl0bGUnO1xuaW1wb3J0ICcuL21haW4uZWpzJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5kb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxkaXYgaWQ9XCJhcHBcIj48L2Rpdj4nKTtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5jb25zdCB0ZXh0QXJlYSA9IG5ldyBUZXh0QXJlYUlucHV0KCk7XG5hcHAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZXh0QXJlYS5yZW5kZXIoKSk7XG50ZXh0QXJlYS5pbml0KCk7XG5cbmNvbnN0IGtleWJvYXJkID0gbmV3IEtleUJvYXJkQ29udHJvbGxlcigpO1xuYXBwLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywga2V5Ym9hcmQucmVuZGVyKCkpO1xua2V5Ym9hcmQuaW5pdCgpO1xuXG5hcHAuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAnYmVmb3JlZW5kJyxcbiAgVGl0bGUoYNCa0LvQsNCy0LjQsNGC0YPRgNCwINGB0L7Qt9C00LDQvdCwINCyINC+0L/QtdGA0LDRhtC40L7QvdC90L7QuSDRgdC40YHRgtC10LzQtSBXaW5kb3dzXG7QlNC70Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGP0LfRi9C60LAg0LrQvtC80LHQuNC90LDRhtC40Y86IEN0cmwgKyBTaGlmdGApLFxuKTtcblxuY29uc3QgbWF0Y2ggPSBbJ1RhYicsICdTaGlmdCcsICdBbHQnLCAnTWV0YSddO1xuXG5jb25zdCBvbktleURvd24gPSAoZXZlbnQpID0+IHtcbiAgaWYgKGlnbm9yS2V5Q29kZS5pbmNsdWRlcyhldmVudC5jb2RlKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBpZiAoIShldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpKSByZXR1cm47XG4gIGlmIChtYXRjaC5pbmNsdWRlcyhldmVudC5rZXkpKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGtleWJvYXJkLmhhbmRsZXJEb3duS2V5KGV2ZW50KTtcbn07XG5cbmNvbnN0IG9uS2V5VXAgPSAoZXZlbnQpID0+IHtcbiAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSkgcmV0dXJuO1xuICBrZXlib2FyZC5oYW5kbGVyVXBLZXkoZXZlbnQpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25LZXlVcCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==