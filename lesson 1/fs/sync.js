const fs = require('fs');

exports.read = (path) => {
  const data = fs.readFileSync(path, 'utf8');

  console.log(data.length);

  return data;
};

exports.write = (path, content) => {
  const data = fs.writeFileSync(path, content);

  return data;
};
