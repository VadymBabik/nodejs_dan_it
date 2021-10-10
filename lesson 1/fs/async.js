const fs = require('fs');

exports.read = (path) =>
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`File size: ${data.length}`);

    return data;
  });

exports.write = (path, content) =>
  fs.writeFile(path, content, (err, data) => {
    if (err) throw err;

    return data;
  });
