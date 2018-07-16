import View from '../core/View.js';

export class SearchView extends View {
  constructor(options, additionalOptions) {
    super(options);
    options = Object.assign(additionalOptions, options);
    console.log(options);
    let {type, inputType, value, inner} = options;
    this.type = type;
    this.inputType = inputType;
    this.value = value;
    this.inner = inner;
    this.setTypeToSearch(this.type, this.inputType, this.value, this.inner);
  }

  setTypeToSearch(prop, value, prop1, value1) {
    this.element.setAttribute(prop, value);
    if(value === 'button') {
      this.element.setAttribute(prop1, value1);
    }
  }
}

const search = new SearchView({
    selector: '.wrapper',
    tagName: 'input',
    idName: 'search',
    className: 'search__input'
  },
  {
    type: 'type',
    inputType: 'text'
  });

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
  });