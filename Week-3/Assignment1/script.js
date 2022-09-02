(function (logger) {
  console.old = console.log;
  console.log = function () {
    var output = "",
      arg,
      i;

    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      output += '<span class="log-' + typeof arg + '">';

      if (
        typeof arg === "object" &&
        typeof JSON === "object" &&
        typeof JSON.stringify === "function"
      ) {
        output += JSON.stringify(arg);
      } else {
        output += arg;
      }

      output += "</span>&nbsp;";
    }

    logger.innerHTML += output + "<br>";
    console.old.apply(undefined, arguments);
  };
})(document.getElementById("logger"));

// // a simple pure function to get a value adding 10
// const add = (n) => n + 10;
// console.log("Simple addition", add(3));
// // a simple memoize function that takes in a function
// // and returns a memoized function
// const memoize = function (param) {
//   let cache = {};
//   return (...args) => {
//     let n = args[0]; // just taking one argument here

//     if (n in cache) {
//       console.log("Fetching from cache");
//       return cache[n];
//     } else {
//       console.log("Calculating result");
//       let result = param(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// };
// // creating a memoized function for the 'add' pure function
// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(100,100)); // calculated
// console.log(memoizedAdd(100)); // cached
// console.log(memoizedAdd(40)); // calculated
// console.log(memoizedAdd(40)); // cached

// Function that sums two numbers
const sum = function (a, b) {
  {
    total = a + b;
    console.log("Calculated Sum");
    return total;
  }
};

// The memoize function takes in a function fnToMemoize as a single Argument and
// returns a function which can be called upon.
// memoizedCache is an object where we cache our new results.
// constructPropertyFromArgs is used to create a unique property name based on the
// argument and function we pass.We will see about that in details in next Section.
// manageInsertion is used to delete the property from the cache object if the maximum
// size is reached.(default length : 10)
// First we check if the property is present in the memoizedCache, if yes, we return
// result from memoizedCache or we actually call the function fnToMemoize and store
// the result in the memoizedCache.

// *  `memoize` function  decides if it has to return cached value or
// * call the summation function

const memoize = function (fnToMemoize) {
  const memoizedCache = {}; // A closeure Object
  return function (...args) {
    const propToCheck = constructPropertyFromArgs(fnToMemoize, args);
    if (!memoizedCache[propToCheck]) {
      memoizedCache[propToCheck] = fnToMemoize(...args);
    } else {
      console.log("From Cache ");
    }
    return memoizedCache[propToCheck];
  };
};

// To create a Property name from the arguments passed to the function
const constructPropertyFromArgs = function (fnToMemoize, args) {
  let propToCheck = [];
  propToCheck = propToCheck.concat(fnToMemoize.name, args);
  return propToCheck.join("|"); // A delimiter to join args
};

const memSummation = memoize(sum, 2); // `memoize` is a HOC

console.log(memSummation(10, 50));
console.log(memSummation(10, 50));
console.log(memSummation(100, 100));
console.log(memSummation(100, 100));
console.log(memSummation(50, 10));
