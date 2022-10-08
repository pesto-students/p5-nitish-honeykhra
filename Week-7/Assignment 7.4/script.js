function parenthesisChecker(str) {
  brackets = { "(": ")", "{": "}", "[": "]" };

  const arr = [];

  console.log("Provided brackets : " + str);

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

const str2 = "()";
console.log(parenthesisChecker(str2));

const str3 = "([]";
console.log(parenthesisChecker(str3));

// Time Complexity of Parenthesis Checker is O(n)
// As we are running 1 for loop
// Space Complexity of Parenthesis Checker is O(1)
// As we are not using any extra space
