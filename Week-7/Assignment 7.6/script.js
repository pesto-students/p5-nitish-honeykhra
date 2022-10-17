// Queue using two stacks
class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // Queue Methods using two stacks
  enqueue(value) {
    this.stack1.push(value);
    console.log("Enqueued " + value);
  }

  dequeue() {
    while (this.stack1.items.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    console.log("Dequeued " + this.stack2.pop());

    // Put Queue back in order so we can proceed with more operations
    while (this.stack2.items.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  peek() {
    if (this.stack1.items.length > 0) {
      console.log("Peek(1st item in queue) " + this.stack1.items[0]);
    }
  }
}

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return !this.items.length;
  }
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    console.log(str);
    return str;
  }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.peek();
queue.dequeue();
queue.peek();
queue.enqueue(4);
queue.dequeue();
queue.enqueue(5);
queue.dequeue();
queue.enqueue(6);
queue.peek();
