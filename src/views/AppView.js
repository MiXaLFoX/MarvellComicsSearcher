import View from '../core/View.js';
import SearchView from './SearchView';
import ListView from './ListView';
import MainView from './MainView';


export class AppView extends View {

  // public search;

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
      <div id="search" class="search"></div>
      <div id="list" class="list">list</div>
      <div id="main" class="main">main</div>
    `;

    this.list = new ListView();
    this.search = new SearchView(this.list);
    new MainView();
  }

}