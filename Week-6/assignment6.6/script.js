// given array S = {-1 2 1 -4}, and target = 1.
//  The sum that is closest to thetarget is 2.(-1 + 2 + 1 = 2)

function findTriplet(arr, target) {
  // Create a variable that is going to hold current sum value
  let curSum = 0;
  let curDiff = 0;
  let finalSum = 0;
  let finalDiff = 0;

  // sort array (a,b)=>a-b
  arr = arr.sort((a, b) => a - b);
  // loop through array
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(curSum, curDiff, finalSum, finalDiff,target);
    // Two pointers
    // First pointer on second element
    let k = i + 1;
    // Second pointer will be on n-1
    let l = arr.length - 1;

    // while pionter 1 < pointer 2
    while (l - k > 0) {
      curSum = arr[i] + arr[k] + arr[l];
      if (curSum === target) return curSum;
      curDiff = Math.abs(target - curSum);

      if (target < curSum) {
        if (curDiff < finalDiff) {
          finalSum = curSum;
          finalDiff = curDiff;
        }
        l--;
      }

      if (target > curSum) {
        if (curDiff < finalDiff) {
          finalSum = curSum;
          finalDiff = curDiff;
        }
        k++;
      }
    }
  }
  console.log(curSum, curDiff, finalSum, finalDiff);
  return finalSum;
}

const S = [-1, 2, 1, -4];
const target = 1;

console.log(findTriplet(S, target));

