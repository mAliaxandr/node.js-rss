const writeToFile = require('./writeToFile');

const transformText = (textData, shiftNum, output) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const firstText = textData.split('');
  const transformedText = [];

  firstText.map(item => {
    const itemIndex = alphabet.indexOf(item.toLowerCase());
    const alphabetLehgth = alphabet.length;
    let itemShiftIndex;
    let isUpperCase = false;
    if (item.toUpperCase() === item) {
      isUpperCase = true;
    }
    console.log('Case --', item.toUpperCase() === item);
    if (itemIndex < 0) {
      transformedText.push(item);
    } else {
      itemShiftIndex = +itemIndex + +shiftNum;
      if (itemShiftIndex > alphabetLehgth - 1) {
        itemShiftIndex = itemShiftIndex - alphabetLehgth;
      }
      if (isUpperCase) {
        transformedText.push(alphabet[itemShiftIndex].toUpperCase());
      } else {
        transformedText.push(alphabet[itemShiftIndex]);
      }
    }
    console.log(
      'transf -- ',
      itemIndex,
      item,
      itemShiftIndex,
      alphabet[itemShiftIndex]
    );
  });
  console.log('transform--', textData, firstText, transformedText.join(''));
  writeToFile(output, transformedText.join(''));
};

module.exports = transformText;
