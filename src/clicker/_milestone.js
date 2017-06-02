export default class Milestone {
  constructor(options) {
    this._counter = options.counter;
    this._threshold = options.threshold;
    this._thresholdReached = false;
    
    this._onHit = options.onHit || (() => {});
    
    this.onCountChange = ::this.onCountChange;
    this._counter.DOMElement.addEventListener('count:change', this.onCountChange);
  }
  
  onCountChange(event) {
    const count = event.detail.count;
    
    if (count >= this._threshold) {
      this._thresholdReached = true;
      this.onThresholdReached();
    }
  }
  
  onThresholdReached() {
    this._onHit();
    this._counter.DOMElement.removeEventListener('count:change', this.onCountChange);
  }
}
