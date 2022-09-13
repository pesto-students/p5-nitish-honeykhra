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

const text = document.getElementById("text");
const button = document.getElementById("button");

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
    this.thenFns = []; // thenFns initialized as empty list
    this.catchFn = null;
    this.value = null;

    // Invoke callback by passing the _resolve and the _reject function of our class
    try {
      callback(this._resolve, this._reject);
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve(value) {
    if (!this.state === STATE.PENDING) {
      return;
    }
    this.state = STATE.FULFILLED;
    // ? Looping through thenFns queue and call each method
    while (this.thenFns.length) {
      const thenFn = this.thenFns.shift();
      // ? first then handler receives value as argument
      // ? after that each method returns the value returned by previous handler
      this.value = thenFn(this.value || value);
    }
  }

  _reject = (error) => {
    if (this.state === STATE.PENDING) {
      this.catch && this.catch(error);
    }
    this.state = STATE.REJECTED;
  };

  then(thenFn) {
    //? Each then handler is pushed into the thenFns list
    this.thenFns.push(thenFn);
    return this;
  }

  catch(catchFn) {
    this.catchFn = catchFn;
    return this;
  }

  // finally(callback) {}
}

const getNumber = () =>
  new MyPromise((res, rej) => {
    const randomNumber = Math.floor(Math.random() * 10);
    // const randomNumber = 10;
    setTimeout(() => {
      res(randomNumber);
    }, randomNumber * 10);
  });

const clickHandler = () => {
  display("Loading...");
  const numberPromise = getNumber();
  numberPromise
    .then((value) => incrementBy(value, 10))
    .then((value) => incrementBy(value, 20))
    .then((value) => incrementBy(value, 30))
    .then(display)
    .catch(display);
};

const display = (content) => {
  text.innerText = content;
};

const incrementBy = (original, incrementValue) => {
  console.log(original + incrementValue);
  return original + incrementValue;
};

button.addEventListener("click", clickHandler);

// ? ES6 implementation of Promise using javascript promise

// const getNumber = () =>
//   new Promise((res, rej) => {
//     // const randomNumber = 10;
//     const randomNumber = Math.floor(Math.random() * 10);
//     setTimeout(() => {
//       res(randomNumber);
//     }, randomNumber * 10);
//   });

// const clickHandler = () => {
//   display("Loading...");
//   const numberPromise = getNumber();
//   numberPromise
//     .then((value) => incrementBy(value, 10))
//     .then((value) => incrementBy(value, 20))
//     .then((value) => incrementBy(value, 30))
//     .then(display)
//     .catch(display);
// };

// const display = (content) => {
//   text.innerText = content;
// };

// const incrementBy = (original, incrementValue) => {
//   console.log(original + incrementValue);
//   return original + incrementValue;
// };

// button.addEventListener("click", clickHandler);
