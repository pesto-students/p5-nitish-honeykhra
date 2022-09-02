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

function createStack() {
  return;
  {
    items: [],
      function push(item) {
        this.items.push(item);
      },
      function pop() {
        return this.items.pop();
      };
  }
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!
function createStack() {
  // Write your code here...
}
// const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined
