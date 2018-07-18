import View from '../core/View.js';

export default class SearchView extends View {
  constructor() {
    super({selector: '#list'});
    console.log(this.selector);
    this.init();
  }

  init() {
    this.render();
  }

  setContent(json) {
    console.log('json', json);
    this.element.innerHTML = json.toString();
  }

  render() {
    this.element.innerHTML = `<ul id="comlcList" class="comics__list">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                              </ul>`;
  }
}