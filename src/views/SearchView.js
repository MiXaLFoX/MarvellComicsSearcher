import View from '../core/View.js';

export class SearchView extends View {
  constructor(options, additionalOptions) {
    super(options);
    options = Object.assign(additionalOptions, options);
    console.log(options);
    let {type, inputType} = options;
    this.type = type;
    this.inputType = inputType;
/*    this.value = value;
    this.inner = inner;*/
    this.setTypeToSearch(this.type, this.inputType);
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    document.querySelector(this.selector).appendChild(this._createElement());
  }

  setTypeToSearch(prop, value) {
    this.element.setAttribute(prop, value);
  }
}

const search = new SearchView({
    selector: '#app',
    tagName: 'input',
    idName: 'search',
    className: 'search__input'
  },
  {
    type: 'type',
    inputType: 'text'
  });

/*
const searchBtn = new SearchView({
    selector: '.wrapper',
    tagName: 'input',
    idName: 'searchBtn',
    className: 'search__btn'
  },
  {
    type: 'type',
    inputType: 'button',
    value: 'value',
    inner: 'Search'
  });*/
