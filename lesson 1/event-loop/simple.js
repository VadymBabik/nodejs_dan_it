setTimeout(() => console.log('timeout code'));

Promise.resolve().then(() => console.log('promise code 1'));

console.log('sync code');

Promise.resolve().then(() => console.log('promise code 2'));
