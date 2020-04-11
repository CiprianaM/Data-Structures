const {DoubleNode} = require('./node');
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtHead(value) {
    const node = new DoubleNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    };
    return true;
  }
  insertAtTail(value) {
    const node = new DoubleNode(value);
    if(!this.head) {
      this.head = this.tail = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      node.previous = currentNode;
      currentNode.next = node;
      this.tail = node;
    }
    return true;
  }

  insertAtPosition(value, position) {
    const node = new DoubleNode(value);
    let index = 0;
    let currentNode = this.head;
    while(index+1 < position && currentNode.next) {
      index++;
      currentNode=currentNode.next;
    }
    if (index+1 < position) {
      return false
    }
    node.previous = currentNode;
    node.next = currentNode.next;
    currentNode.next = node;
    return true;
  }

  deleteFromHead() {
    if (this.head===null) {
      return false;
    }
    if (this.head===this.tail) {
      this.head = this.tail = null;
    } else {
      this.head.next.previous = this.head;
      this.head = this.head.next;
    }
    return true;
  }
  deleteFromTail() {
    if (this.head===null) {
      return false;
    }
    if (this.head===this.tail) {
      this.head = this.tail = null;
    } else {
      let currentNode = this.head;
      if (currentNode.next) {
        while (currentNode.next.next) {
          currentNode = currentNode.next;
        }
        currentNode.next.previous = currentNode;
        currentNode.next = null;
        this.tail = currentNode;
      }
    }
    return true;
  }
  deleteFromPosition(position) {
    let index = 0;
    let currentNode = this.head;
    while((index+1)<position &&currentNode.next) {
      index++;
      currentNode=currentNode.next
    }
    if (currentNode.next) {
      if (currentNode==this.head) {
        this.head = currentNode.next;
        return true;
      }
      currentNode.next=currentNode.next.next;
      if (!currentNode.next) {this.tail=currentNode}
      return true
    } else {
      if (!currentNode.next) {
        return false;
      }
    }
    return false;
  }
}

// let list = new DoubleLinkedList();
// list.insertAtHead('A');//A
// list.insertAtTail('B');//AB
// list.insertAtTail('C')//ABC
// list.insertAtTail('D')//ABCD
// list.insertAtPosition('E', 2)//ABECD
// list.deleteFromHead()//BECD
// list.deleteFromHead()//ECD
// list.deleteFromPosition(0)//CD
// console.log(list)

module.exports = DoubleLinkedList;