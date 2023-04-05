import makeResultsEmojiString from './makeResultsEmojiString';

export default function makeResultsEmojiLayout(results) {
  return results.map((string, i) => (
    <span key={i}>
      {makeResultsEmojiString(string)} <br />
    </span>
  ));
}
