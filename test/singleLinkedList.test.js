const SingleLinkedList = require('../lists/singleLinkedList');
const {SingleNode, DoubleNode} = require('../lists/node');

const list = new SingleLinkedList();
const anotherList = new SingleLinkedList();
const node1 = new SingleNode('A');
const node2 = new SingleNode('B');
const node3 = new SingleNode('C');
const node4 = new SingleNode('D');
const node5 = new SingleNode('E');
const node6 = new SingleNode('F');
const anotherNode1 = new SingleNode('A');
const anotherNode2 = new SingleNode('B');
const anotherNode3 = new SingleNode('C');
const anotherNode4 = new SingleNode('D');
const anotherNode5 = new SingleNode('E');
const anotherNode6 = new SingleNode('F');

list.insertNodeAtHead(node1);//A
list.insertNodeAtHead(node2);//BA
list.insertNodeAtTail(node3);//BAC
list.insertNodeAtTail(node4);//BACD
list.insertNodeAtTail(node5);//BACDE
list.insertNodeAtPosition(node6, 1);//BFACDE //

test('Insertion', () => {
  expect(list).toEqual({
    head: {
      data: 'B',
        next: {
          data: 'F',
          next: {
            data: 'A',
            next: {
              data: 'C',
              next: {
                data: 'D',
                next: {
                  data: 'E',
                  next: null
                }
              }
            }
          }
        }
      }
  })
})

anotherList.deleteFromHead();
anotherList.insertNodeAtHead(anotherNode1);//A
anotherList.insertNodeAtTail(anotherNode2);//AB
anotherList.insertNodeAtHead(anotherNode3);//CAB
anotherList.deleteFromHead();//AB
anotherList.deleteFromTail();//A
anotherList.insertNodeAtHead(anotherNode4);//DA
anotherList.insertNodeAtTail(anotherNode5);//DAE
anotherList.insertNodeAtPosition(anotherNode6,1)//DFAE
anotherList.deleteFromPosition(2);//DFE
anotherList.deleteFromPosition(1);//DE

test('Deletion', () => {
  expect(anotherList).toEqual({
    head: {
      data: 'D',
      next: {
        data: 'E',
        next: null
      }
    },
  })
})
