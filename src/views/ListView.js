import View from '../core/View.js';

export default class ListView extends View {
  constructor() {
    super({selector: '#list'});
    this.init();
  }

  init() {
    this.render();
  }

  render(item) {
    if(item) {
      this.element.innerHTML = `<ul id="comicsList" class="comics__list">
                                <li>${item}</li>
                              </ul>`;
    } else {
      this.element.innerHTML = `<ul id="comicsList" class="comics__list"></ul>`;
    }
  }
}