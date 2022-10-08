// Queue using two stacks
function Queue() {
  var s1 = new Stack();
  var s2 = new Stack();
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

var stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
console.log(stack.peek());
console.log(stack.pop());
stack.printStack();

Queue();
