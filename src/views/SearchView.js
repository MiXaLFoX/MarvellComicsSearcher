import View from '../core/View.js';

export default class SearchView extends View {
  constructor() {
    super({selector: '#search'});
    console.log(this.selector);
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.element.innerHTML = `<input id="searchInput" class="search__input" type="text"/>
                              <input id="searchInput" class="search__btn" type="button" value="search"/>`;
  }
}



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
