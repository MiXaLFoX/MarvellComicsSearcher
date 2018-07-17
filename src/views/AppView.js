import View from '../core/View.js';
import SearchView from './SearchView';

export class AppView extends View {
  constructor(){
    super({selector: '#app'});
    console.log(this.selector);
    this.init();
  }

  init() {
    this.render();
  }

  render(){
    this.element.innerHTML = `
      <div id="search" class="search">search</div>
      <div id="list" class="list">list</div>
      <div id="main" class="main">main</div>
    `;
    /*const search = new SearchView({
        selector: '#app',
        tagName: 'input',
        idName: 'search',
        className: 'search__input'
      },
      {
        type: 'type',
        inputType: 'text'
      });*/
  }

}