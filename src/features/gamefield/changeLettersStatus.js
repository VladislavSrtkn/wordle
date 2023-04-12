import changeKeyboardButtonStatus from '../keyboard/changeKeyboardButtonStatus';

// Function mutates objects, make sure a copy is passed as an arguments

export default function changeLettersStatus(puzzle, currentTry, results, keyboard) {
  const lettersToCheck = [];
  const matched = [];

  results[currentTry].forEach((letter, index) => {
    const { value } = letter;

    // If there is no such letter in puzzle
    if (!puzzle.includes(value)) {
      letter.status = 'notInPuzzle';
      changeKeyboardButtonStatus(value, 'notInPuzzle', keyboard);
    }

    // If the letter is in the puzzle and is in the same place
    else if (puzzle[index] === value) {
      matched.push(value);
      letter.status = 'inPlace';
      changeKeyboardButtonStatus(value, 'inPlace', keyboard);
    }

    //If the letter is in the puzzle but is in a different place
    else {
      lettersToCheck.push({ value, position: index });
    }
  });

  // checking letters that are in puzzle but are not in their place
  lettersToCheck.forEach((letter) => {
    const { value, position } = letter;

    const countInPuzzle = [...puzzle].filter((letter) => letter === value).length;
    const countInMatched = matched.filter((letter) => letter === value).length;

    if (countInPuzzle > countInMatched) {
      results[currentTry][position].status = 'inPuzzle';
      changeKeyboardButtonStatus(value, 'inPuzzle', keyboard);
      matched.push(value);
    } else {
      results[currentTry][position].status = 'notInPuzzle';
    }
  });
}
