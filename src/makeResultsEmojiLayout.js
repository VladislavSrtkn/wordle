import makeResultsEmojiString from './makeResultsEmojiString';

export default function makeResultsEmojiLayout(resultsArray) {
  return resultsArray.map((string) => makeResultsEmojiString(string));
}
