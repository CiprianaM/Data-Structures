//A hash table - a value key data structure
//Given a string =>hashFunction(string) returns an integer
//The hash function needs to return this integer in a manner that optimizes memory allocation, but minimizes conflicts
//(for example, strings "abcd" and "efgh" might generate the same key)

const {hash, Storage} = require('./utils');

function hashTable(size) {
  this.size = size;
  this.storage = Storage(size);
  this.used = 0; //for re-sizing
}

hashTable.prototype.insert = function (key, value) {
  //create a new index
  const index = hash(key, this.size);
  //at that index, check if elements already exist and post at the end on the linked list;
  const head = this.storage.get(index);
  let node = head;
  while (node) {
    //check if I'm inserting same key but with different value; if so, overwrite the value
    if (node.key === key) {
      node.value = value;
      return true;
    }
    node = node.next;
  }
  const newNode = {
    key,
    value
  }
  //link newly created node to the head
  if (head) newNode.next = head;
  this.used++;
  this.storage.set(index, value);
  return true;
}

hashTable.prototype.delete = function () {

}

hashTable.prototype.retrieve = function () {

}

hashTable.prototype._checkSize = function() {

}

hashTable.prototype._changeSize = function () {

}

