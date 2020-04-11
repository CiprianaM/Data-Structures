class SingleLinkedList {
  constructor() {
    this.head = null;
  }
  //helper function
  checkHead() {
    return !!this.head;
  }
  //helper function
  findPreviousNode(position) {
    let currentNode = this.head;
    let index = 0;
    while (position>index+1) {
      index++;//1
      currentNode = currentNode.next;//A
    }
    return currentNode;
  }
  insertNodeAtHead(node) {
    this.checkHead() ? (node.next = this.head) && (this.head = node) : this.head = node
    return this.head;
  }
  insertNodeAtTail(node) {
    if (!this.checkHead()) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next!==null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    return this.head;
  }
  insertNodeAtPosition(nodeToInsert, position) {
    let currentNode = this.findPreviousNode(position);//B
    nodeToInsert.next = currentNode.next;
    currentNode.next = nodeToInsert;
    return this.head;
  }
  deleteFromHead() {
    if (!this.checkHead()) {
      console.log('not possible')
      return null;
    } else {
      console.log('head deleted')
      this.head = this.head.next;
    }
    return this.head;
  }
  deleteFromTail() {
    if (!this.checkHead()) {
      return null;
    } else {
      let currentNode = this.head;
      if (currentNode.next===null) {
        this.head = null;
        return this.head;
      } else {
        while (currentNode.next.next!==null) {
          currentNode = currentNode.next;
        }
        currentNode.next = null;
        return this.head;
      }
    }
  }
  deleteFromPosition(position) {
    let previousNode = this.findPreviousNode(position);
    // console.log(previousNode)
    if (previousNode.next===null || previousNode===undefined) {
      // console.log('node doesnt exit', previousNode);
      return null;
    } else {
      previousNode.next = previousNode.next.next;
      return null;
    }

  }
}

module.exports = SingleLinkedList;