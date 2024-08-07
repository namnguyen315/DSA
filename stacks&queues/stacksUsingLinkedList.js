class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackUsingLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
  }

  print() {
    let stack = "[";
    let current = this.head;

    while (current !== null) {
      stack = stack + current.data;
      if (current.next !== null) {
        stack = stack + ", ";
      }
      current = current.next;
    }
    stack = stack + "]";
    console.log(stack);
  }
}

const stack = new StackUsingLinkedList();

stack.push(10);
stack.push(20);
stack.push(5);
stack.pop();

stack.print();
