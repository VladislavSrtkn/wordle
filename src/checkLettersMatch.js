import changeKeyboardButtonStatus from './changeKeyboardButtonStatus';

// Function mutates the object, make sure a copy is passed as an argument

export default function checkLettersMatch(puzzle, progressCopy) {
  const { currentTry } = progressCopy;

  const check = [];
  const matched = [];

  progressCopy.results[currentTry].forEach((letter, index) => {
    const { value } = letter;

    // If there is no such letter in puzzle
    if (!puzzle.includes(value)) {
      letter.status = 'notInPuzzle';
      changeKeyboardButtonStatus(value, 'notInPuzzle', progressCopy.keyboard);
    }

    // If the letter is in the puzzle and is in the same place
    else if (puzzle[index] === value) {
      matched.push(value);
      letter.status = 'inPlace';
      changeKeyboardButtonStatus(value, 'inPlace', progressCopy.keyboard);
    }

    //If the letter is in the puzzle but is in a different place
    else {
      check.push({ value, position: index });
    }
  });

  // checking letters that are in puzzle but are not in their place
  check.forEach((letter) => {
    const { value, position } = letter;

    const countInPuzzle = [...puzzle].filter((letter) => letter === value).length;
    const countInMatched = [...matched].filter((letter) => letter === value).length;

    if (countInPuzzle > countInMatched) {
      progressCopy.results[currentTry][position].status = 'inPuzzle';
      changeKeyboardButtonStatus(value, 'inPuzzle', progressCopy.keyboard);
      matched.push(value);
    } else {
      progressCopy.results[currentTry][position].status = 'notInPuzzle';
    }
  });
}
