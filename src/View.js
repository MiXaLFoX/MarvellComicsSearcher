
export class View {
  constructor(options) {
    let {selector, tagName, idName, className} = options;
    this.selector = selector;
    this.tagName = tagName;
    this.idName = idName;
    this.className = className;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    document.querySelector(this.selector).appendChild(this._createElement());
  }

  _createElement() {
    const element = document.createElement(this.tagName);
    this._addAttrsToELement(element, this.idName, this.className);
    this.element = element;
    return element;
  }

  _addAttrsToELement(element, id, className) {
    element.id = id;
    element.classList.add(className);
  }
}

class AppView extends View {
  constructor (options) {
    super (options);
  }

}

class SearchView extends View {
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

const wrapper = new AppView({
  selector: 'body',
  tagName: 'div',
  idName: 'app',
  className: 'wrapper'
});

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