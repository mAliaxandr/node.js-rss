const fs = require('fs');
const path = require('path');
const transformText = require('./transformText');

const readFromFile = (fileName, shiftNum, output, actionType) => {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('read--', data);
    transformText(data, shiftNum, output, actionType);
  });
};

module.exports = readFromFile;
