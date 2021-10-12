const path = require('path');
const async = require('./async');
const sync = require('./sync');

const filePath = path.resolve(__dirname, '../data/cities.json');
const filePathUaCities = path.resolve(__dirname, '../data/cities_ua.json');

async.read(filePath).then((result) => console.log(result));

// const data = JSON.parse(jsonData);
//
// const uaCities = data.filter((city) => city.country === 'UA');
//
// sync.write(filePathUaCities, JSON.stringify(uaCities));

// console.log(uaCities);
