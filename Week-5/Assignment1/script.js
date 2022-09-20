function doTask1() {
  return (res1 = fetch("https://jsonplaceholder.typicode.com/users"));
}

function doTask2(res1) {
  return (res2 = res1.json());
}

function doTask3(res2) {
  return (res3 = res2.map((user) => console.log(user.name)));
}

// An async function.
async function init() {
  // Perform asynchronous task1 and logs the result.
  const res1 = await doTask1();
  console.old(res1);
  // Perform asynchronous task2 using the result of task1.
  // Then log the result.
  const res2 = await doTask2(res1);
  console.old(res2);

  console.log("=========================");
  console.log("Output using async await");
  console.log("=========================");
  // Perform asynchronous task3 using the result of task2.
  // Then log the result.
  const res3 = await doTask3(res2);
  // console.log(res3);
  
  // Finally return the result of task3.
  return;
}

init();

// An implementation using a generator-function.
function* init1() {
  // Yields a promise for task1.
  const res1 = yield doTask1();
  // Logs the result of the yield expression.
  console.old(res1);
  // Yields a promise for task2.
  const res2 = yield doTask2(res1);
  // Logs the result of the yield expression.
  console.old(res2);
  console.log("================================");
  console.log("Output using generator function");
  console.log("================================");
  // Yields a promise for task3.
  const res3 = yield doTask3(res2);
  // Logs the result of the yield expression.

  // Finally return
  return;
}

// This function takes a generator function
// & executes its body to completion.
function runner(genFn) {
  //Iterator for the generator function.
  const itr = genFn();
  // This function is called recursively once
  // the current promise is resolved.

  function run(arg) {
    const result = itr.next(arg);

    if (result.done) {
      // Return the current value if iteration is finished.
      return result.value;
    } else {
      // Execute the `run` function, only when the current promise resolves.
      return Promise.resolve(result.value).then(run);
    }
  }
  return run();
}

// Use the runner` function to execute `init`.
runner(init1);
