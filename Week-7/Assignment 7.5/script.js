// A Stack based Javascript program to find next
// greater element for all array elements.
function printNge(arr, n) {
  console.log("Element" + " --> " + "Next Greater Element");
  var stack = [];

  // push the first element to stack
  stack.push(arr[0]);

  // iterate for rest of the elements
  for (var i = 1; i < n; i++) {
    if (!stack.length) {
      stack.push(arr[i]);
    }

    // if stack is not empty, then pop an element from stack.
    // If the popped element is smaller than next, then
    while (stack.length && stack[stack.length - 1] < arr[i]) {
      // a) print the pair
      console.log(stack[stack.length - 1] + " --> " + arr[i]);
      // b) keep popping while elements are smaller and stack is not empty
      stack.pop();
    }

    // push next to stack so that we can find next greater for it
    stack.push(arr[i]);
  }

  //  After iterating over the loop, the remaining
  // elements in stack do not have the next greater
  // element, so print -1 for them
  while (stack.length != 0) {
    console.log(stack[stack.length - 1] + " --> " + -1);
    stack.pop();
  }
}

var arr1 = [1, 3, 2, 4];
var n = arr1.length;
printNge(arr1, n);

var arr2 = [6, 8, 0, 1, 3];
var n = arr2.length;
printNge(arr2, n);

// Time Complexity of Next Greater Element is O(n)
// Space Complexity of Next Greater Element is O(n)

// // JavaScript program to print next greater
// // elements in a given array
// function printNge(arr, n) {
//   console.log("Element" + " --> " + "Next Greater Element");
//   var next, i, j;
//   // Loop for element
//   for (i = 0; i < n; i++) {
//     next = -1;
//     // Loop for next greater element
//     for (j = i + 1; j < n; j++) {
//       // if next element is bigger than make it next and return
//       if (arr[i] < arr[j]) {
//         next = arr[j];
//         break;
//       }
//     }

//     console.log(arr[i] + " --> " + next);
//   }
// }

// var arr1 = [1, 3, 2, 4];
// var n = arr1.length;
// printNge(arr1, n);

// var arr2 = [6,8,0,1,3];
// var n = arr2.length;
// printNge(arr2, n);

// Time Complexity of Next Greater Element is O(n^2)
// As we are running 2 for loops
// Space Complexity of Next Greater Element is O(1)
// As we are not using any extra space
