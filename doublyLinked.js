class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head, null);
    console.log('insert first success', this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = new _Node(item, null, temp);
    console.log('insertlast success', temp.value, temp.next.value);
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
      return;
    }

    prevNode.next = currNode.next;
    currNode.next.prev = prevNode;
    console.log('success removal!', prevNode.value, currNode.next.prev.value);
    
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
      return;
    }

    let temp = currNode;
    prevNode.next = new _Node(item, temp, prevNode);
    temp.prev = prevNode.next;

    console.log('insert before success!', prevNode.value, prevNode.next.value, temp.prev.value);
    
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
    currNode.next = new _Node(item, temp, currNode);
    temp.prev = currNode.next;

    console.log('insert after success!', currNode.value, currNode.next.value, temp.prev.value);
  }

}

function main() {
  let DLL = new DoublyLinkedList();
  DLL.insertFirst('Balay');
  DLL.insertLast('Aydemir');
  DLL.insertLast('Nate');
  DLL.insertLast('Leung');
  //DLL.insertAfter('thinkful', 'Nate');
  //DLL.insertBefore('Thinkful', 'Nate');
  //DLL.remove('Aydemir');
}

console.log(main());