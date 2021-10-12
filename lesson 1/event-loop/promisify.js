const funcWithCB = (arg1, arg2, callback) => {
  const sum = arg1 + arg2;

  if (sum < 0) {
    const err = new Error('');

    throw err;
  } else {
    callback(null, sum);
  }
};

const funcWithPromise = (...args) =>
  new Promise((resolve, reject) => {
    funcWithCB(args[0], args[1], (err, sum) => {
      if (err) reject(err, sum);
      else resolve(sum);
    });
  });

try {
  funcWithCB(0, -1, (_, data) => console.log(data));
} catch (err) {
  console.log('err from sync');
}
funcWithPromise(0, -1)
  .then((result) => console.log(result))
  .catch((err) => console.log('err from promise'));
