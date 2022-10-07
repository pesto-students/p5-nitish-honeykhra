// To rotate the linked list,
// we need to change the next pointer of kth node to NULL,
//  the next pointer of the last node should point to the previous head node,
//  and finally, change the head to(k + 1)th node

//  So we need to get hold of three nodes:
//  kth node, (k + 1)th node, and last node.

//  Traverse the list from the beginning and stop at kth node.
//  store k’s next in a temp pointer and point k’s next to NULL
//  then start traversing from temp and keep traversing
//   till the end and point end node’s next to start node
//   and make temp as the new head.

var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// This function rotates a linked list counter-clockwise
// and updates the head
function rotate(k) {
  if (k == 0) return;
  console.log(`Rotated Linked List by : ${k} places`);
  var current = head;
  var count = 1;

  // Traverse the linked list upto kth node
  while (count < k && current != null) {
    current = current.next;
    count++;
  }

  // If current = NULL or k > n
  // Don't change the list in this case
  if (current == null) return;
  // current points to kth node
  var kthNode = current;
  // current will point to last node after this loop
  while (current.next != null) current = current.next;
  // Change next of last node to previous head
  current.next = head;
  // Change head to (k+1)th node
  head = kthNode.next;
  // change next of kth node to null
  kthNode.next = null;
}

function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

function printList() {
  var curr = head;
  var str = "Head -> ";
  while (curr) {
    str += curr.data + "-> ";
    curr = curr.next;
  }
  str += "null";
  console.log(str);
}

// ? Use case
// create a list 10->20->30->40->50->60
for (i = 60; i >= 10; i -= 10) push(i);

console.log("Given list");
printList();
rotate(4);
printList();
