console.log('Sync code start');

// ! Macro-task
const interval = setInterval(() => {
  console.log('setInterval');
}, 0);

// ! Macro-task
setTimeout(() => {
  console.log('setTimeout 1');

  // Micro-tasks
  Promise.resolve()
    .then(() => console.log('promise 3'))
    .then(() => console.log('promise 4'))
    .then(() => {
      // ! Macro-task
      setTimeout(() => {
        console.log('setTimeout 2');
        // Micro-tasks
        Promise.resolve()
          .then(() => console.log('promise 5'))
          .then(() => console.log('promise 6'))
          .then(() => clearInterval(interval));
      }, 0);
    });
}, 0);

// Micro-tasks
Promise.resolve()
  .then(() => console.log('promise 1'))
  .then(() => console.log('promise 2'));

// Micro-tasks
Promise.resolve()
  .then(() => console.log('end 1'))
  .then(() => console.log('end 2'));

console.log('Sync code end');
