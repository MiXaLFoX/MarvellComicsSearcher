import View from '../core/View.js';
import md5 from "blueimp-md5";

export class SearchView extends View {
  constructor(ee) {
    super({selector: '#search'});
    ee.trigger('searchViewInit', {query: 'somedata'});
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.element.innerHTML = `<input id="searchInput" class="search__input" type="text"/>
                              <input id="searchBtn" class="search__btn" type="button" value="search"/>`;
  }
}


