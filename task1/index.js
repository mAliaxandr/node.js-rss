const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();

console.log('node run');

const actionFunc = x => console.log(`action: ${x}`);

const writeToFile = (fileName, data) => {
  const text = data || 'text ttttt2';
  fs.writeFile(path.join(__dirname, fileName), `${text}`, err => {
    if (err) {
      console.log('error: ', err);
      return null;
    }
    return text;
  });
};

program
  .option('-s, --shift <shiftType>', 'shift')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .option('-a, --action <actionType>', 'action');

program.parse(process.argv);

if (program.action) actionFunc(program.action);
if (program.shift) console.log(program.shift);
if (program.output) writeToFile(`${program.output}`);
