import View from '../core/View.js';


export default class ListView extends View {
  constructor(ee) {
    super({selector: '#list'});
    ee.on('searchViewInit', this.alert.bind(this));
    this.init();
  }

  init() {
    this.render();
  }

  render(item) {
    if(item) {
      this.element.innerHTML = `<ul id="comicsList" class="comics__list">
                                <li>${this.model.addFetchLogic()}</li>
                              </ul>`;
    } else {
      this.element.innerHTML = `<ul id="comicsList" class="comics__list"></ul>`;
    }
  }

  alert(data) {
    alert(JSON.stringify(data));
  }
}