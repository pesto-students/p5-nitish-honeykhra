// Make an array of objects

// for loop through string
// if key and value match

function parenthesisChecker(str) {
  brackets = { "(": ")", "{": "}", "[": "]" };

  const arr = [];

  for (const el of str) {
    if (brackets[el]) {
      arr.push(brackets[el]);
    } else if (el != arr.pop()) {
      return false;
    }
  }
  return arr.length === 0;
}

const str = "{([])}";
console.log(parenthesisChecker(str));