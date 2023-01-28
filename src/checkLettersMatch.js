import changeKeyboardButtonStatus from './changeKeyboardButtonStatus';

export default function checkLettersMatch(word, puzzle, progressCopy, currentTry) {
  const check = [];
  const matched = [];

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].value;
    const currentLetter = progressCopy.results[currentTry][i];

    if (!puzzle.includes(letter)) {
      currentLetter.status = 'notInPuzzle';

      changeKeyboardButtonStatus(letter, 'notInPuzzle', progressCopy.keyboard);
    } else if (puzzle[i] === letter) {
      matched.push(letter);

      currentLetter.status = 'inPlace';
      changeKeyboardButtonStatus(letter, 'inPlace', progressCopy.keyboard);
    } else {
      check.push({ value: letter, position: i });
    }
  }

  for (let i = 0; i < check.length; i++) {
    const letter = check[i];
    const currentLetter = progressCopy.results[currentTry][letter.position];
    const countInPuzzle = [...puzzle].filter((symb) => symb === letter.value).length;
    const countInMatched = [...matched].filter((symb) => symb === letter.value).length;

    if (countInPuzzle > countInMatched) {
      currentLetter.status = 'inPuzzle';
      changeKeyboardButtonStatus(letter.value, 'inPuzzle', progressCopy.keyboard);
      matched.push(letter.value);
    } else {
      currentLetter.status = 'notInPuzzle';
    }
  }

  return progressCopy;
}
