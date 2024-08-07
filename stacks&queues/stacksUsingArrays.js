class StackUsingArray {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    } else return false;
  }
  peek() {
    if (this.stack.isEmpty()) {
      return "Stack is empty";
    } else return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new StackUsingArray();

stack.push(10);
stack.push(20);
stack.push(5);

stack.pop();

stack.print();
