import View from '../core/View.js';
import SearchView from './SearchView';
import ListView from './ListView';
import MainView from './MainView';


export class AppView extends View {
  constructor(){
    super({selector: '#app'});
    this.init();
  }

  init() {
    this.render();
  }

  render(){
    this.element.innerHTML = `
      <div id="search" class="search"></div>
      <div id="list" class="list"></div>
      <div id="main" class="main"></div>
    `;


    this.list = new ListView();
    this.search = new SearchView(this.list);
    new MainView();
  }

}