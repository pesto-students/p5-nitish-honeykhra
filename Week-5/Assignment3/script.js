// ? function for checking if an array is unique or not
function checkIfArrayIsUnique(myArray) {
  // ? We create a new set to compare against the array
  // ? Why we use a set
  // ? Because a set can only have unique values
  return myArray.length === new Set(myArray).size;
}

// ? function to print true or false to console
function uniqueOrNot(array) {
  console.log(
    checkIfArrayIsUnique(array)
      ? `${array} is unique:${checkIfArrayIsUnique(array)}`
      : `${array} is unique:${checkIfArrayIsUnique(array)}`
  );
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 1, 2, 3, 4, 5];
let array3 = [10, 12];
let array4 = [12, 12];

uniqueOrNot(array1);
uniqueOrNot(array2);
uniqueOrNot(array3);
uniqueOrNot(array4);
