const fs = require('fs');
const path = require('path');

// console.log(process.argv);

// console.log(process.cwd(), 'process.cwd');
// console.log(__dirname, '__dirname');
// console.log(process.env.PWD, 'process.env.PWD');

// process.chdir('../fs');

// console.log(process.cwd(), 'process.cwd');
// console.log(__dirname, '__dirname');
// console.log(process.env.PWD, 'process.env.PWD');

const readDir = async () => {
  const child = await fs.promises.readdir(__dirname);

  const foldersInfo = await Promise.all(
    child
      .filter((c) => path.extname(c) === '')
      .map((folder) => fs.promises.readdir(path.join(__dirname, folder)))
  );

  console.log('first level', child);

  foldersInfo.forEach((info) => console.log('second level', info));
};

readDir();
