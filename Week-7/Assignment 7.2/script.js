// To rotate the linked list,
// we need to change the next pointer of kth node to NULL,
//  the next pointer of the last node should point to the previous head node,
//  and finally, change the head to(k + 1)th node
//  So we need to get hold of three nodes:
//  kth node, (k + 1)th node, and last node.
//  Traverse the list from the beginning and stop at kth node.
//  store k’s next in a tem pointer and point k’s next to NULL
//  then start traversing from tem and keep traversing
//   till the end and point end node’s next to start node
//   and make tem as the new head.
