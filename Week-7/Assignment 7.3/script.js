// Create loop for testing
class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  isEmpty() {
    return this.size == 0;
  }

  size_of_list() {
    console.log(this.size);
  }

  printList(curr = this.head) {
    // var curr = this.head;
    var str = "Head -> ";
    while (curr) {
      str += curr.element + "-> ";
      curr = curr.next;
    }
    str += "null";
    console.log(str);
  }

  detectLoop() {
    let curr = this.head;
    let slowPointer = curr,
      fastPointer = curr;
    let flag = 0;

    while (
      slowPointer != null &&
      fastPointer != null &&
      fastPointer.next != null
    ) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer == fastPointer) {
        flag = 1;
        break;
      }
    }

    console.log("Loop detected : ");
    !(flag == 1) ? console.log(false) : console.log(true);
  }
}

var ll = new LinkedList();
[1, 2, 3, 4, 5, 6, 7, 8].map((el) => ll.add(el));
ll.printList();
ll.detectLoop();

// Add a loop to test
ll.head.next.next.next.next = ll.head;
console.log("Added a loop");
ll.detectLoop();

// Time Complexity of Detect Loop Function is O(n)
// As we are running 1 while loop
// Space Complexity of Detect Loop Function is O(1)
// As we are not using any extra space
