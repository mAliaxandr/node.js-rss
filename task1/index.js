const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const transformText = require('./transformText');
const program = new Command();

let shiftNum = null;
// let actionType = null;
let textData = null;
let input = null;
let output = null;

program
  .option('-s, --shift <shiftType>', 'shift')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .option('-a, --action <actionType>', 'action');

program.parse(process.argv);

// if (program.action) actionType = `${program.action}`;
if (program.shift) shiftNum = `${program.shift}`;
if (program.input) input = `${program.input}`;
if (program.output) output = `${program.output}`;

const readFromFile = fileName => {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
    if (err) throw err;
    textData = data;
    console.log('read--', data);
    transformText(textData, shiftNum, output);
  });
};

if (input) {
  readFromFile(input);
}
