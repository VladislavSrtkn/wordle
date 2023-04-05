import makeResultsEmojiString from './makeResultsEmojiString';

export default function makeResultsEmojiLayout(results) {
  return results.map((string) => makeResultsEmojiString(string));
}
