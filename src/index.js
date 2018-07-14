
class View {
  constructor(selector, tagName, idName, className) {
    this.selector = document.querySelector(selector);
    this.tagName = tagName;
    this.idName = idName;
    this.className = className;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.selector.appendChild(this._createElement());
  }

  _createElement() {
    const element = document.createElement(this.tagName);
    element.id = this.idName;
    this._addAttrsToELement(element, element.id, this.className);
    return element;
  }

  _addAttrsToELement(element, id, className) {
    const elemClassName = element.classList.add(className);
    return elemClassName;
  }
}

const menuContainer = new View('body', 'ul', 'nav', 'menu');
