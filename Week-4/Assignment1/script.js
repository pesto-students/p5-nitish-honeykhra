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

// ? Overview of a promise
// const promise = new Promise((resolve, reject) => {
/*
    Code logic goes here and you call  resolve(value)
    or reject(error) to resolve or reject the promise
 */
// });

// promise
//   .then((value) => {
// Code logic on success of an operation
//   })
//   .catch((error) => {
// Code logic on failure of an operation
//   })
//   .finally(() => {
// Code logic to be executed after completion of operation
//   });

// ? Actual implementation of a Custom Promise

// ? Three states of a Promise
const STATE = {
  PENDING: "PENDING", //Default State
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};
class MyPromise {
  constructor(callback) {
    // Initial state of Promise
    this.state = STATE.PENDING;
    this._resolve = this._resolve.bind(this);
    this._reject = this._reject.bind(this);
    this.thenFn = null;
    this.catchFn = null;

    // Invoke callback by passing the _resolve and the _reject function of our class
    try {
      callback(this._resolve, this._reject);
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve = (value) => {
    if (this.state === STATE.PENDING) {
      this.then && this.then(value);
    }
    this.state = STATE.FULFILLED;
  };

  _reject = (error) => {
    if (this.state === STATE.PENDING) {
      this.catch && this.catch(error);
    }
    this.state = STATE.REJECTED;
  };

  then(thenFn) {
    this.thenFn = thenFn;
    return this;
  }

  catch(catchFn) {
    this.catchFn = catchFn;
    return this;
  }

  // finally(callback) {}
}

const getNumber = () => {
  new MyPromise((resolve, reject) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        reject(console.log(`Rejected with number ${randomNumber}`));
      } else {
        resolve(console.log(`Resolved with number ${randomNumber}`));
      }
    }, randomNumber * 10);
  });
};


// getNumber();

document.getElementById("button");
button.addEventListener("click", getNumber());

// ? ES6 implementation of Promise using javascript promise
// const getNumber = () => {
//   new Promise((resolve, reject) => {
//     const randomNumber = parseInt(Math.random() * 100, 10);
//     setTimeout(() => {
//       if (randomNumber % 5 === 0) {
//         reject(console.log(`Rejected with number ${randomNumber}`));
//       } else {
//         resolve(console.log(`Resolved with number ${randomNumber}`));
//       }
//     }, randomNumber * 10);
//   });
// };

// getNumber();

// document.getElementById("button");
// button.addEventListener("click", getNumber());
