class Stack {
  constructor() {
    this.storage = {};
    this.length = 0;
    return true;
  }
  push (value) {
    this.storage[this.length] = value;
    this.length++;
  }
  pop () {
    if (this.length) {
      //save result in a var
      const result = this.storage[this.length];
      //delete from storage
      delete this.storage[this.length];
      //return result
      return result;
    }
    return null;
  }
}
