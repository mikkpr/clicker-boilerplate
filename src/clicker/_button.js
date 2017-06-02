export default class Button {
  constructor(options) {
    this._button = document.createElement('button');
    this._button.innerText = options.text || 'CLICK ME';
    this._button.addEventListener('click', options.onClick);
  }
  
  get DOMElement () {
    return this._button;
  }
}
