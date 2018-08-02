import Model from '../core/Model.js';

export class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(eventName, callback) {
    this._addCallback(eventName, callback);
  }

  trigger(eventName, data) {
    const event = this.events.has(eventName);
    if(event) {
      this.events.get(eventName).forEach(fn => {
        fn.call(null, data);
        this._removeCallback(eventName, fn);
      });
    } else {
      this._addEvent(eventName);
    }
  }

  _addEvent(eventName) {
    this.events.set(eventName, []);
  }
  _addCallback(eventName, callback) {
    this.events.has(eventName) || this._addEvent(eventName);
    this.events.get(eventName).push(callback);
  }

  _removeCallback(eventName, callback) {
    const callbacks = this.events.get(eventName);
    this.events.set(eventName, callbacks.filter(clb => clb !== callback));
  }
}