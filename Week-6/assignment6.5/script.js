function pairWithDifference(array, difference) {
  let n = array.length;
  console.log("Difference: " + difference);
  for (let i = 0; i < n; i++) {
    // console.log(array[i]);

    let a = array[i];
    for (let j = 0; j < n; j++) {
      let b = array[j];
      if (a - b === difference) {
        // return a, b;
        return [a, b, true];
      }
      // console.log("No such pair exist");
    }
  }
}

const A = [5, 10, 3, 2, 50, 80];
const B = 78;
console.log("Pair with difference : ", pairWithDifference(A, B));
