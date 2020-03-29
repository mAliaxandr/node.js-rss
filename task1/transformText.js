const writeToFile = require('./writeToFile');

const transformText = (textData, shiftNum, output, actionType) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const firstText = textData.split('');
  const transformedText = [];

  firstText.map(item => {
    const itemIndex = alphabet.indexOf(item.toLowerCase());
    const alphabetLehgth = alphabet.length;
    const itemShiftIndex = getShiftIndex(actionType);
    let isUpperCase = false;

    function getShiftIndex(type) {
      let ShiftIndex;
      if (type === 'encode') {
        ShiftIndex = +itemIndex + +shiftNum;
        if (ShiftIndex > alphabetLehgth - 1) {
          ShiftIndex = ShiftIndex - alphabetLehgth;
        }
      }

      if (type === 'decode') {
        ShiftIndex = +itemIndex - shiftNum;
        if (ShiftIndex < 0) {
          ShiftIndex = alphabetLehgth + ShiftIndex;
        }
      }
      return ShiftIndex;
    }

    if (item.toUpperCase() === item) {
      isUpperCase = true;
    }
    if (itemIndex < 0) {
      transformedText.push(item);
    } else if (isUpperCase) {
      transformedText.push(alphabet[itemShiftIndex].toUpperCase());
    } else {
      transformedText.push(alphabet[itemShiftIndex]);
    }
  });
  writeToFile(output, transformedText.join(''));
};

module.exports = transformText;
