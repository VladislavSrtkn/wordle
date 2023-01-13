import makeResultsEmojiString from './makeResultsEmojiString';

export default function makeResultsEmojiLayout(resultsArray) {
  let emojiLayout = [];

  for (let i = 0; i < resultsArray.length; i++) {
    emojiLayout.push(makeResultsEmojiString(resultsArray[i]));
  }

  return emojiLayout;
}
