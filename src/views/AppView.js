import View from '../core/View.js';
import {EventEmitter} from '../core/EventEmitter.js';

import {SearchView} from './SearchView';
import ListView from './ListView';
import MainView from './MainView';


export class AppView extends View {
  constructor(){
    super({selector: '#app'});
    this.ee = new EventEmitter();
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


    this.list = new ListView(this.ee);
    this.search = new SearchView(this.ee);
    this.searchBar = document.querySelector('#searchInput');
    this.searchBtn = document.querySelector('#searchBtn');
    new MainView(this.ee);
  }

}