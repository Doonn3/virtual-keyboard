import './button.scss';

function button(buttonType) {
  const { id, key, dataEng, dataRus } = buttonType;

  const classNameMod = id === 'Tab' ? 'tab' : '';

  return `
    <div id="${id}" class="button ${classNameMod}" data-key-eng="${dataEng}" data-key-rus="${dataRus}">
        <span class="button__key">${key}</span>
    </div>
    `;
}

export default button;
