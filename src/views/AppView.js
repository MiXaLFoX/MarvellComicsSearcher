import View from '../core/View.js';
import SearchView from './SearchView';

export class AppView extends View {
  constructor(options){
    super(options);
    this.init();
  }

  init() {
    this.render();
  }

  render(){
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
  }

}