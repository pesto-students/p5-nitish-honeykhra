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
  // Write your code here...
  let items = [];

  return {
    push: (element) => {
      items.push(element);
      console.log("Added to stack " + element);
    },
    pop: () => {
      console.log("Removed from stack " + items.pop());
      return;
    },
    peek: () => {
      console.log("Top of stack is");
      console.log(items[items.length - 1]);
      return;
    },
    isEmpty: () => {
      console.log("Is stack empty");
      return console.log(items.length === 0);
    },
    size: () => {
      return console.log("Size of stack: " + items.length);
    },
  };
}

const stack = createStack();
stack.push(10); //10
stack.push(5); // 5
stack.push(25); // 5
stack.push(50); // 5
stack.pop();
stack.peek();
stack.isEmpty();
stack.size();

console.log("Stack.items " + stack.items); // undefined
