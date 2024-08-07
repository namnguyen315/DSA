class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueUsingLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
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

  dequeue() {
    let current = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.length--;
    }
  }

  peek() {
    if (this.head == null) {
      console.log("Queue is empty");
    } else console.log(this.head.data);
  }

  size() {
    console.log(this.length);
  }

  isEmpty() {
    if (this.head == null) {
      console.log(true);
    } else console.log(false);
  }

  print() {
    let queue = "[";
    let current = this.head;

    while (current !== null) {
      queue = queue + current.data;
      if (current.next !== null) {
        queue = queue + ", ";
      }
      current = current.next;
    }
    queue = queue + "]";
    console.log(queue);
  }
}

const queue = new QueueUsingLinkedList();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(5);

queue.dequeue();

queue.peek();

queue.size();

queue.isEmpty();

queue.print();
