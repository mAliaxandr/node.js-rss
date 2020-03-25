const { Command } = require('commander');

const program = new Command();

console.log('node run');

const actionFunc = x => console.log(`action: ${x}`);

program
  .option('-a, --action <actionType>', 'action')
  .option('-s, --shift <shiftType>', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

if (program.action) actionFunc(program.action);
if (program.shift) console.log(program.shift);
if (program.pizzaType) console.log(`- ${program.pizzaType}`);
