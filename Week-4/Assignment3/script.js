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

// ! Code starts here

const Fib = (n) => ({
  [Symbol.iterator]: () => {
    let i = 1;
    let old = 0,
      new1 = 0;
    return {
      next: () => {
        // value: "something",
        // done: false,
        // console.log(i, old, new1);
        if (i++ <= n) {
          [old, new1] = [new1, old + new1 || 1];
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

// Print method 1
// console.log([...Fib(6)]);
//? Print method 2
console.log("The Fibonacci Series is ");
for (let num of Fib(9)) {
  console.log(num);
}
