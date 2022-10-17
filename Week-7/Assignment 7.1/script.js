// User defined class node
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

  // functions to be implemented
  // add(element)
  // adds an element at the end
  // of list
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

  // insertAt(element, location)
  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  //? removeFrom(location)
  // removes an element from the
  // specified location
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      return console.log("Please Enter a valid index");
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }

  //? removeElement(element)
  // removes a given element from the
  // list
  removeElement(element) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // Helper Methods
  // indexOf
  // finds the index of element
  indexOf(element) {
    var count = 0;
    var current = this.head;

    // iterate over the list
    while (current != null) {
      // compare each element of the list
      // with given element
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }

  // isEmpty
  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  // size_Of_List
  // gives the size of the list
  size_of_list() {
    console.log(this.size);
  }

  // PrintList
  // prints the list items
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

  // Reverse link list
  reverseList() {
    let prev = null;
    let next = null;
    let current = this.head;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    // return prev;
    console.log("Reversed link list");
    this.printList(prev);
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

console.log("Is Link list Empty : ");
console.log(ll.isEmpty());

ll.printList();
ll.reverseList();

// Time Complexity of Reverse Link List is O(n)
// As we are running 1 while loop
// Space Complexity of Reverse Link List is O(1)
// As we are not using any extra space
