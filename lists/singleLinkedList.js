const {SingleNode} = require('./node');
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtHead(value) {
    const node = new SingleNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    };
    return true;
  }
  insertAtTail(value) {
    const node = new SingleNode(value);
    if(!this.head) {
      this.head = this.tail = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.tail = node;
    }
    return true;
  }

  insertAtPosition(value, position) {
    const node = new SingleNode(value);
    let index = 0;
    let currentNode = this.head;
    while(index+1 < position && currentNode.next) {
      index++;
      currentNode = currentNode.next;
    }
    if (index+1 < position) {
      return false;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return true;
  }

  deleteFromHead() {
    if (this.head === null) {
      return false;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return true;
  }
  deleteFromTail() {
    if (this.head === null) {
      return false;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let currentNode = this.head;
      if (currentNode.next) {
        while (currentNode.next.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
      }
    }
    return true;
  }
  deleteFromPosition(position) {
    let index = 0;
    let currentNode = this.head;
    while((index+1) < position && currentNode.next) {
      index++;
      currentNode = currentNode.next;
    }
    if (currentNode.next) {
      if (currentNode === this.head) {
        currentNode.next.previous = null;
        this.head = currentNode.next;
        return true;
      }
      currentNode.next.next.previous = currentNode.next;
      currentNode.next = currentNode.next.next;
      if (!currentNode.next) {
        this.tail = currentNode;
      }
      return true;
    } else {
      if (!currentNode.next) {
        return false;
      }
    }
    return false;
  }
}

module.exports = SingleLinkedList;
