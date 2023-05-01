import './button.scss';

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

export default button;
