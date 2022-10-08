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

  // This function rotates a linked list counter-clockwise and updates the head.
  rotateList(k, current = this.head) {
    if (k == 0) return;

    var count = 1;
    // Traverse the linked list upto kth node
    while (count < k && current !== null) {
      current = current.next;
      count++;
    }
    // Don't change the list in this case
    if (current === null) return;
    // current points to kth node
    var kthNode = current;
    // current will point to last node after this loop
    while (current.next !== null) current = current.next;

    // Change next of last node to previous head
    current.next = this.head;
    // Change head to (k+1)th node
    this.head = kthNode.next;
    // change next of kth node to null
    kthNode.next = null;

    console.log(`Rotated Linked List by : ${k} places`);
    this.printList(this.head);
  }
}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// adding more elements to the list
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();
ll.rotateList(2);
