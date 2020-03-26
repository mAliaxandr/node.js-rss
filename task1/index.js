const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();

let shiftNum = null;
let actionType = null;
let textData = null;

const actionFunc = x => {
  actionType = `${x}`;
  console.log(`action: ${x}`);
};

const readFromFile = fileName => {
  fs.readFile(path.join(__dirname, fileName), (err, data) => {
    if (err) throw err;
    textData = data;
    console.log('read--', data);
  });
};

const writeToFile = (fileName, data) => {
  setTimeout(() => {
    const text =
      data ||
      `data : shift = ${shiftNum}, action = ${actionType}, text = ${textData}`;
    console.log('write -- ', text);
    fs.writeFile(path.join(__dirname, fileName), `${text}`, err => {
      if (err) {
        console.log('error: ', err);
        return null;
      }
      return text;
    });
  }, 1000);
};

program
  .option('-s, --shift <shiftType>', 'shift')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .option('-a, --action <actionType>', 'action');

program.parse(process.argv);

if (program.action) actionFunc(program.action);
if (program.shift) shiftNum = `${program.shift}`;
if (program.input) readFromFile(`${program.input}`);
if (program.output) writeToFile(`${program.output}`);
