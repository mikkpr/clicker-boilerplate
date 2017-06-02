export default class Counter {
  constructor(options = {}) {
    this._counter = document.createElement('div');
    this._counter.classList.add('count');

    this._count = options.count || 0;
    this._incrementBy = options.incrementBy || 1;
  }

  refresh() {
    this._counter.innerText = this._count;
  }

  increment() {
    this.count = this._count + this._incrementBy;
  }

  get DOMElement() {
    return this._counter;
  }

  get count () {
    return this._count;
  }

  set count(count) {
    this._count = count;
    this._counter.dispatchEvent(new CustomEvent('count:change', { detail: { count: this._count }}))
  }

  get incrementBy () {
    return this._incrementBy;
  }

  set incrementBy(incrementBy) {
    this._incrementBy = Math.max(1, incrementBy);
  }
};
