const { Command } = require('commander');
const program = new Command();
const readFromFile = require('./readFromFile');

let shiftNum = null;
let actionType = null;
let output = null;

program
  .option('-s, --shift <shiftType>', 'shift')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .option('-a, --action <actionType>', 'action');

program.parse(process.argv);

if (program.action) actionType = `${program.action}`;
if (program.shift) shiftNum = `${program.shift}`;
if (program.output) output = `${program.output}`;
if (program.input) {
  readFromFile(`${program.input}`, shiftNum, output, actionType);
}
