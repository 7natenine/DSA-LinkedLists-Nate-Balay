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
    console.log('insert first success!', item);
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
    console.log('insert last success!', item);

  }

  find(item) {
    
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {

    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Not found!', item);
      return;
    }
    prevNode.next = currNode.next;
    console.log('remove success!', item);
  }

  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === key) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== key)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('key not found!', key);
      return;
    }

    let temp = currNode;
    prevNode.next = new _Node(item, temp);
    console.log('insertBefore success!', prevNode.value, prevNode.next);

  }

  insertAfter(item, key) {
    if (!this.head){
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head; 
    
    while ((currNode !== null) && (currNode.value !== key)) {
      prevNode = currNode; 
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log ('key not found!', key); 
      return; 
    }

    if (currNode.next === null) {
      this.insertLast(item);
      console.log('Item inserted at the end', currNode.next);
      return;
    }

    let temp = currNode.next;
    currNode.next = new _Node(item, temp);
    console.log('insertAfter success!', prevNode.value, currNode.value, currNode.next);
  }

  insertAt(item, pos) {
    if (!this.head){
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;
    let indexAt = 1;

    while ((currNode !== null) && (indexAt !== pos)) {
      prevNode = currNode; 
      currNode = currNode.next;
      indexAt++;
    }
    
    prevNode.next = new _Node(item, currNode);
    
    console.log('insertAt success!', prevNode.value, prevNode.next);
  }

  reverseList() {
    let currNode = this.head;
    let prevNode = null;
    let tmp = null;

    while (currNode) {
      tmp = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = tmp;
    }
    
    this.head = prevNode;
    return prevNode;
    
  }

}

function display(list) {
  let currNode = list.head;

  if (!currNode) {
    return null;
  }

  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  return console.log(currNode.value);
}

function size(list) {
  let currNode = list.head;
  let count = 0;

  if (!currNode) {
    return null;
  }

  while (currNode.next !== null) {
    currNode = currNode.next;
    count++;
  }
  return count;
}

function isEmpty(list) {
  let currNode = list.head;

  if(!currNode){
    return true;
  }
  else 
    return false;
}

function findPrevious(list, item) {
  let currNode = list.head;
  let prevNode = list.head;
  
  if (!currNode) {
    return null;
  }

  while ((currNode.next !== null) && (currNode.value !==item)) {
    prevNode = currNode; 
    currNode = currNode.next;
  }

  if(currNode.value === item){
    return console.log(prevNode.value);
  }
}

function findLast(list) {
  let currNode = list.head;

  if (!currNode) {
    return null; 
  }

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  if(currNode.next === null){
    return console.log(currNode.value);
  }
}


function main() {
  // let LL = new LinkedList();
  // LL.insertFirst('Apollo');
  // LL.insertLast('Boomer');
  // LL.insertLast('Helo');
  // LL.insertLast('Husker');
  // LL.insertLast('Starbuck');
  // LL.insertLast('Tauhida');
  // LL.remove('squirrel');
  // LL.insertBefore('Athena', 'Boomer');
  // LL.insertAfter('Hotdog','Helo');
  // LL.insertAt('Kat', 3);
  // LL.remove('Tauhida');
  // // display(LL);
  // // size(LL);
  // // findPrevious(LL,'Husker');
  // // findLast(LL);
  let MM = new LinkedList();
  MM.insertFirst('hello');
  MM.insertLast('world');
  MM.insertLast('how');
  MM.insertLast('are');
  MM.insertLast('you');
  display(MM);
  MM.reverseList();
  //console.log(reverseList(MM));
  display(MM);
}

console.log(main());


//doubly linked lists

/**
 * insert in doubly linked list
 * new node will have a next AND previous 
 * change the next of previous value and change
 * the previous of next value
 */

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

/**
 * This function removes repeated duplicates.
 */