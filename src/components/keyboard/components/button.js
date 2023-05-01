import './button.scss';

function button(buttonType) {
  const { id, key, dataEng, dataRus } = buttonType;

  const classNameMod = id === 'Tab' ? 'tab' : '';

  return `
    <div id="${id}" class="btn ${classNameMod}" data-key-eng="${dataEng}" data-key-rus="${dataRus}">
        <p class="btn__key">${key}</p>
    </div>
    `;
}

export default button;
