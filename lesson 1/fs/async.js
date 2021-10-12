const fs = require('fs');

exports.read = (path) => fs.promises.readFile(path, 'utf8');

exports.write = (path, content) => fs.promises.writeFile(path, content);
