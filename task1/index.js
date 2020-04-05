const { Command } = require('commander');
const program = new Command();
// const validate = require('./validate');
// const readFromFile = require('./readFromFile');

const options = {
  shiftNum: null,
  actionType: null,
  output: null,
  input: null
};

program
  .option('-s, --shift <shiftType>', 'shift')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .option('-a, --action <actionType>', 'action');

program.parse(process.argv);

if (program.action) options.actionType = `${program.action}`;
if (program.shift) options.shiftNum = `${program.shift}`;
if (program.output) options.output = `${program.output}`;
if (program.input) options.input = `${program.input}`;

// validate(options);
