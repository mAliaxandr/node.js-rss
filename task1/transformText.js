const transformText = (textData, shiftNum) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const firstText = textData.split('');
  const transformedText = [];

  firstText.map(item => {
    const itemIndex = alphabet.indexOf(item.toLowerCase());
    const alphabetLehgth = alphabet.length;
    let itemShiftIndex;
    if (itemIndex < 0) {
      transformedText.push(item);
    } else {
      itemShiftIndex = +itemIndex + +shiftNum;
      if (itemShiftIndex > alphabetLehgth - 1) {
        itemShiftIndex = itemShiftIndex - alphabetLehgth;
      }
      transformedText.push(alphabet[itemShiftIndex]);
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
  // writeToFile(output, transformedText.join(''));
};

module.exports = transformText;
