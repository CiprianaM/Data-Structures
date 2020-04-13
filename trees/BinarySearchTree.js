function BinarySearchTree () {
  this.root = null;
}

BinarySearchTree.prototype.addNode = function (value, left = null, right = null) {
  const node = {
    value,
    left,
    right
  }
  //if tree is empty, add node as root
  if (!this.root) {
    this.root = node;
  } else {
    // search the tree, starting from root
    let currentNode = this.root;
    //as long as there still is a node, we can advance on the tree
    while(currentNode) {
      //compare value with current node's value, and move towards the left or the right, accordingly.
      //if there is no more left or right, then it means we can insert the node
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
          return true;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = node;
            return true;
          } else {
            currentNode = currentNode.right;
          }
        }
      }

    }
  }
  return true;
}

const lemonTree = new BinarySearchTree();
lemonTree.addNode(10);
lemonTree.addNode(5);
lemonTree.addNode(7);
lemonTree.addNode(2);
lemonTree.addNode(0);
lemonTree.addNode(8);
lemonTree.addNode(15);
lemonTree.addNode(17);
lemonTree.addNode(18);
lemonTree.addNode(20);
lemonTree.addNode(30);
console.log(lemonTree);


