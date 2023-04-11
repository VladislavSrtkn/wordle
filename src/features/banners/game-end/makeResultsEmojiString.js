export default function makeResultsEmojiString(arr) {
  let emojiString = ``;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === 'notInPuzzle') {
      emojiString += '⬜';
    }
    if (arr[i].status === 'inPuzzle') {
      emojiString += '🟨';
    }
    if (arr[i].status === 'inPlace') {
      emojiString += '🟩';
    }
  }

  return emojiString;
}
