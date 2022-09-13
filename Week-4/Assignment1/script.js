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

// ? ES6 implementation of Promise using javascript promise

const getNumber = () =>
  new Promise((res, rej) => {
    // const randomNumber = 10;
    const randomNumber = Math.floor(Math.random() * 10);
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
