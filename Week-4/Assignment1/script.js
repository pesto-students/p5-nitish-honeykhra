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
const promise = new Promise((resolve, reject) => {
  /*
    Your code logic goes here and you call  resolve(value)
    or reject(error) to resolve or reject the promise
  */
});

promise
  .then((value) => {
    // Code logic on success of an operation
  })
  .catch((error) => {
    // Code logic on failure of an operation
  })
  .finally(() => {
    // Code logic to be executed after completion of operation
  });
