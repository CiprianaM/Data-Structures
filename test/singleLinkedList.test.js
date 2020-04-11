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
