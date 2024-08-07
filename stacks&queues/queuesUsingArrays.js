class QueueUsingArray {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new QueueUsingArray();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(5);

queue.print();
