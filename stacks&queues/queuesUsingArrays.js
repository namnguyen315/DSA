class QueueUsingArray {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    this.queue.shift();
  }

  isEmpty() {
    if (this.queue.length === 0) {
      console.log(true);
    } else console.log(false);
  }
  peek() {
    if (this.queue.length === 0) {
      console.log("Queue is empty");
    } else console.log(this.queue[0]);
  }

  size() {
    console.log(this.queue.length);
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new QueueUsingArray();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(5);

queue.dequeue();

queue.peek();

queue.size();

queue.isEmpty();

queue.print();
