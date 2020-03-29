const fs = require('fs');
const path = require('path');

const writeToFile = (fileName, data) => {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (err, text) => {
    if (err) {
      throw err;
    }
    if (text) {
      fs.writeFile(path.join(__dirname, fileName), `${text}\n${data}`, err2 => {
        if (err2) {
          console.log('error: ', err2);
          return null;
        }
      });
    } else {
      fs.writeFile(path.join(__dirname, fileName), `${data}`, err2 => {
        if (err2) {
          console.log('error: ', err2);
          return null;
        }
      });
    }
  });
};

module.exports = writeToFile;
