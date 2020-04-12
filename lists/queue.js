class Queue {
  constructor () {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }
  unshift (value) {
    this.storage[this.end] = value;
    this.end++;
    return true;
  }
  shift () {
    if (this.end>this.start){
      const result = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return result;
    }
    return false;
  }
}