class SingleNode {
  constructor(data, next = null) {
    this.data = data,
    this.next = next
  }
}

class DoubleNode {
  constructor(data, next = null, previous = null ) {
    this.data = data,
    this.next = next,
    this.previous = previous
  }
}
module.exports = {SingleNode, DoubleNode}
