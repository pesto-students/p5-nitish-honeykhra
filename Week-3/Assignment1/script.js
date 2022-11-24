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

// ! Main Code starts here

// ? Memoize function

function memoize(fn) {
  const cache = new Map();
  // Object having key value pairs
  return function (...args) {
    // ? get all arguments
    const key = args.toString();
    console.log("Fn called with " + key);

    // console.log(cache);
    if (cache.has(key)) {
      {
        x = cache.get(key);
        console.log("From Cache " + x);
      }
      return x;
    }
    cache.set(key, fn(...args));
    {
      y = cache.get(key);
      console.log("Added to Cache " + y);
    }
    return y;
  };
}
// * Simple add function
// function add(a, b) {
//   return a + b;
// }

// * Add refactor for n number of inputs in ES6
function add(...args) {
  // console.log(...args);
  return args.reduce(function (aac, cur) {
    // aac stands for accumulator and cur stands for current value
    return aac + cur;
  });
}

const memoizeAdd = memoize(add);

memoizeAdd(100, 100);
memoizeAdd(100, 100);
memoizeAdd(100, 100, 200, 400);
memoizeAdd(100);
memoizeAdd(100);
memoizeAdd(10, 35);
memoizeAdd(1, 35);
memoizeAdd(10, 5);
memoizeAdd(10, 3);
memoizeAdd(10, 5);
memoizeAdd(10, 3);
