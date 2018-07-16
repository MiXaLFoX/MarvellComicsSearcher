
export default class View {
  constructor({selector, tagName, idName, className} = {}) {
    this.selector = selector;
    this.tagName = tagName;
    this.idName = idName;
    this.className = className;
    this.element =  this._createElement(this.idName, this.className, this.tagName);
  }

  init() {

  }

  render() {

  }

  _createElement(id, className, tagName) {
    const element = document.createElement(tagName);
    this._addAttrsToELement(element, id, className);
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

