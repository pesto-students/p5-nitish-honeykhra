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

var log = console.log;

// ! Code starts here
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: Create a class Teacher and a method teach
class Teacher extends Person {
  constructor(name, age) {
    super(name, age); // call the super class constructor and pass in the name parameter
  }
  teach(sub) {
    // let subject;
    // subject = sub;
    log(`${this.name} is now teaching ${sub}`);
  }
}

Teacher.prototype.tution = function (subject) {
  let tutionSubject = subject;
  log(`${this.name} is now teaching ${tutionSubject} at home`);
};

const him = new Teacher();
him.initialize("Adam", 45);
log(him);
him.teach("inheritance");
him.tution("ReactJs");

// ? ES6 method
// class Person {
//   initialize(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   return() {
//     console.log(`Person's name is ${this.name}`);
//     console.log(`Person's age is ${this.age}`);
//   }
// }
