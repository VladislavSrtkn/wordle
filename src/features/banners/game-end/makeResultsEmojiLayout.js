import makeResultsEmojiRow from './makeResultsEmojiRow';

export default function makeResultsEmojiLayout(results) {
  return results.map((word) => makeResultsEmojiRow(word));
}
