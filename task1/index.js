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

// const writeToFile = (fileName, data) => {
//   console.log('write -- ');
//   const text =
//     data ||
//     `data : shift = ${shiftNum}, action = ${actionType}, text = ${textData}`;
//   fs.writeFile(path.join(__dirname, fileName), `${text}`, err => {
//     if (err) {
//       console.log('error: ', err);
//       return null;
//     }
//     return text;
//   });
// };

// const transformText = () => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const firstText = textData.split('');
//   const transformedText = [];

//   firstText.map(item => {
//     const itemIndex = alphabet.indexOf(item.toLowerCase());
//     const alphabetLehgth = alphabet.length;
//     let itemShiftIndex;
//     if (itemIndex < 0) {
//       transformedText.push(item);
//     } else {
//       itemShiftIndex = +itemIndex + +shiftNum;
//       if (itemShiftIndex > alphabetLehgth - 1) {
//         itemShiftIndex = itemShiftIndex - alphabetLehgth;
//       }
//       transformedText.push(alphabet[itemShiftIndex]);
//     }
//     console.log(
//       'transf -- ',
//       itemIndex,
//       item,
//       itemShiftIndex,
//       alphabet[itemShiftIndex]
//     );
//   });
//   console.log('transform--', textData, firstText, transformedText.join(''));
//   writeToFile(output, transformedText.join(''));
// };

const readFromFile = fileName => {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
    if (err) throw err;
    textData = data;
    console.log('read--', data);
    // writeToFile(output, textData);
    transformText(textData, shiftNum, output);
  });
};

if (input) {
  readFromFile(input);
}

// if (textData) {
//   writeToFile(output, textData);
// } else {
//   setTimeout(() => writeToFile(output, textData), 1000);
// }
