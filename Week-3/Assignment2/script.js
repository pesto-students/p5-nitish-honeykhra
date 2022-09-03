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

// ? Call function

function greet(name) {
  var reply = [
    name,
    this.animal,
    "typically sleep between",
    this.sleepDuration,
  ].join(" ");

  console.log(reply);
}

var cats = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

var dogs = {
  animal: "dogs",
  sleepDuration: "2 and 5 hours",
};

var monkeys = {
  animal: "monkeys",
  sleepDuration: "8 and 12 hours",
};

console.log("Call");
greet.call(cats); // cats typically sleep between 12 and 16 hours
greet.call(dogs); // dogs typically sleep between 2 and 5 hours
greet.call(monkeys);

// ? Bind in Javascript

var obj = {
  firstName: "John",
  friends: ["Bob", "Smith", "Jane"],
  loop: function () {
    this.friends.forEach(
      function (friend) {
        // ! this = global
        console.log(this.firstName + " knows " + friend);
      }.bind(this)
    );
  },
};

console.log("Bind");
obj.loop();
