import View from '../core/View.js';

export default class MainView extends View {
  constructor(ee) {
    super({selector: '#main'});
    ee.on('fetch-data', this.render.bind(this));
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.element.innerHTML = `<div id="mainSection" class="main__section">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eligendi
                                praesentium quod voluptatibus. Fugit quidem quisquam sequi! Deleniti explicabo
                                magnam maiores nam omnis, voluptate. Asperiores laboriosam nihil officia quo vel.
                              </div>`;
  }

}