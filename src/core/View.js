
export default class View {
  constructor(options) {
    let {selector, tagName, idName, className} = options;
    this.selector = selector;
    this.tagName = tagName;
    this.idName = idName;
    this.className = className;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    document.querySelector(this.selector).appendChild(this._createElement());
  }

  _createElement() {
    const element = document.createElement(this.tagName);
    this._addAttrsToELement(element, this.idName, this.className);
    this.element = element;
    return element;
  }

  _addAttrsToELement(element, id, className) {
    element.id = id;
    element.classList.add(className);
  }
}

/*class AppView extends View {
  constructor (options) {
    super (options);
  }

}


const wrapper = new AppView({
  selector: 'body',
  tagName: 'div',
  idName: 'app',
  className: 'wrapper'
});*/

