//?  We create a function and pass it a char
function isVowel(char) {
  // ? if the char is included in the "aeiou" then return it
  return "aeiou".includes(char);
}

// ? function takes string as argument and count vowels
function vowelCount(str) {
  // ? A new empty map is created for vowels
  const vowelMap = new Map();
  //  We iterate over every character of the string using for of loop
  for (let char of str) {
    // convert all characters to lowercase
    let lowerCaseChar = char.toLowerCase();
    // ! function isVowel is called and every char is checked
    // ! is it a vowel and then added to vowelMap
    if (isVowel(lowerCaseChar)) {
      // ? if isVowel returns a vowel then we check
      // ? if it is present in vowelMap or not
      if (vowelMap.has(lowerCaseChar)) {
        // ? if it is present in vowelMap then we increment the count of it 
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        // ? else it is added and count is set to 1
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(
  vowelCount("JavaScript Program to Count the Number of Vowels in a String")
);
