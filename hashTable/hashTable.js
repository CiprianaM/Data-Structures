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
  //link newly created node to the previous head; now the new elem is the new head
  if (head) newNode.next = head;
  this.used++;
  //overwrite previous linked list with new linked list
  this.storage.set(index, value);
  return true;
}

hashTable.prototype.delete = function (key) {
  //get index
  const index = hash(key, this.size);
  //retrieve head at index. First element will be the head of the list
  const head = this.storage.get(index);
  //create temporary node to use to iterate through linked list; for each exixting node, check if you have the right key
  let node = head;
  if (node.key === key) {
    this.storage.set(index, node.next);
    this.used--;
    return true;
  }
  while (node.next) {
    if (node.next.key===key) {
      node.next = node.next.next;
      this.used--;
      return true;
    }
  }
  return false;
}

hashTable.prototype.retrieve = function (key) {
  const index = hash(key, size);
  const head = this.storage.get(index);
  let node = head;
  //if something has been retrieved, iterate through linked list and compare all keys to given key. if found, return it
  while (node) {
    if (node.key===key) {
      return ({
        key: node.key,
        value: node.value
      })
    }
    node = node.next;
  }
  //if we've reached the end of the list without returning found elem, return false
  return false;
}

hashTable.prototype._checkSize = function() {

}

hashTable.prototype._changeSize = function () {

}

