import Model from '../core/Model.js';

export default class View {
  constructor({selector, tagName, idName, className} = {}) {
    this.selector = selector;
    this.tagName = tagName;
    this.idName = idName;
    this.className = className;
    this.element = this.selector ? this._getElementBySelector(this.selector) : this._createElement(this.idName, this.className, this.tagName)
    this.model = new Model('Thor');
    this.model.addFetchLogic();
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
    if(id) {
      element.id = id;
    }
    if(className) {
      element.classList.add(className);
    }
  }

  _getElementBySelector(selector) {
    return document.querySelector(selector);
  }
}

