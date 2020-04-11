const SingleLinkedList = require('../lists/singleLinkedList');

const list = new SingleLinkedList();
const anotherList = new SingleLinkedList();

list.insertAtHead('A');//A
list.insertAtTail('B');//AB
list.insertAtTail('C')//ABC
list.insertAtHead('D')//DABC
list.insertAtPosition('E', 2)//DAEBC

anotherList.insertAtHead('A');//A
anotherList.insertAtTail('B');//AB
anotherList.insertAtTail('C')//ABC
anotherList.insertAtHead('D')//DABC
anotherList.insertAtPosition('E', 2)//DAEBC
anotherList.deleteFromTail()//DAEB
anotherList.deleteFromHead()//AEB
anotherList.deleteFromPosition(1)//AB
anotherList.deleteFromPosition(0)//B

test('Insertion', () => {
  expect(list).toEqual({
    head: {
      data: 'D',
      next: {
        data: 'A',
        next: {
          data: 'E',
          next: {
            data: 'B',
            next: {
              data: 'C',
              next: null
            }
          }
        }
      }
    },
      tail: {
        data: 'C',
        next: null
      }
  })
})

test('Deletion', () => {
  expect(anotherList).toEqual({
    head: {
      data: 'B',
      next: null
    },
    tail: {
      data: 'B',
      next: null
    }
  })
})

// anotherList.deleteFromHead();
// anotherList.insertNodeAtHead(anotherNode1);//A
// anotherList.insertNodeAtTail(anotherNode2);//AB
// anotherList.insertNodeAtHead(anotherNode3);//CAB
// anotherList.deleteFromHead();//AB
// anotherList.deleteFromTail();//A
// anotherList.insertNodeAtHead(anotherNode4);//DA
// anotherList.insertNodeAtTail(anotherNode5);//DAE
// anotherList.insertNodeAtPosition(anotherNode6,1)//DFAE
// anotherList.deleteFromPosition(2);//DFE
// anotherList.deleteFromPosition(1);//DE

// test('Deletion', () => {
//   expect(anotherList).toEqual({
//     head: {
//       data: 'D',
//       next: {
//         data: 'E',
//         next: null
//       }
//     },
//   })
// })
