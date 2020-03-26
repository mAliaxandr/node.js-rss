const fs = require('fs');
const path = require('path');

const writeToFile = (fileName, data) => {
  console.log('write -- ');
  const text = data || 'defaul text';
  fs.writeFile(path.join(__dirname, fileName), `${text}`, err => {
    if (err) {
      console.log('error: ', err);
      return null;
    }
    return text;
  });
};

module.exports = writeToFile;
