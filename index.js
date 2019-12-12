class _Node {
  constructor(value, next /*prev*/) {
    this.value = value;
    this.next = next;
    //this.prev = prev; //doubly linked
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    //this.tail = null; //doubly linked
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {

    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = new _Node(item, null);

  }




}

let list = new LinkedList();

//doubly linked lists

/**
 * insert in doubly linked list
 * new node will have a next AND previous 
 * change the next of previous value and change
 * the previous of next value
 */

