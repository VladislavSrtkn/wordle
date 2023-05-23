export default function makeResultsEmojiRow(word) {
  let emojiString = ``;

  word.forEach((letter) => {
    // eslint-disable-next-line
    switch (letter.status) {
      case 'notInPuzzle':
        emojiString += '⬜';
        break;
      case 'inPuzzle':
        emojiString += '🟨';
        break;
      case 'inPlace':
        emojiString += '🟩';
        break;
    }
  });

  return emojiString;
}
