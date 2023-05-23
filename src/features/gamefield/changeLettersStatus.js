import changeKeyboardButtonStatus from '../keyboard/changeKeyboardButtonStatus';

const NOT_IN_PUZZLE = 'notInPuzzle';
const IN_PUZZLE = 'inPuzzle';
const IN_PLACE = 'inPlace';

// Functions mutates objects, make sure a copy is passed as an arguments ******

function changeSimpleLettersStatus(puzzle, currentTry, results, keyboard, lettersToCheck, matched) {
  results[currentTry].forEach((letter, index) => {
    const { value } = letter;

    // If there is no such letter in puzzle
    if (!puzzle.includes(value)) {
      letter.status = NOT_IN_PUZZLE;
      changeKeyboardButtonStatus(value, NOT_IN_PUZZLE, keyboard);
    }

    // If the letter is in the puzzle and is in the same place
    else if (puzzle[index] === value) {
      matched.push(value);
      letter.status = IN_PLACE;
      changeKeyboardButtonStatus(value, IN_PLACE, keyboard);
    }

    //If the letter is in the puzzle but is in a different place
    else {
      lettersToCheck.push({ value, index });
    }
  });
}

function changeComplexLettersStatus(
  puzzle,
  currentTry,
  results,
  keyboard,
  lettersToCheck,
  matched
) {
  // checking letters that are in puzzle but are not in their place
  lettersToCheck.forEach((letter) => {
    const { value, index } = letter;

    const countInPuzzle = [...puzzle].filter((letter) => letter === value).length;
    const countInMatched = matched.filter((letter) => letter === value).length;

    const initialLetter = results[currentTry][index];

    if (countInPuzzle > countInMatched) {
      initialLetter.status = IN_PUZZLE;
      changeKeyboardButtonStatus(value, IN_PUZZLE, keyboard);
      matched.push(value);
    } else {
      initialLetter.status = NOT_IN_PUZZLE;
    }
  });
}

export default function changeLettersStatus(puzzle, currentTry, results, keyboard) {
  const lettersToCheck = [];
  const matched = [];

  changeSimpleLettersStatus(puzzle, currentTry, results, keyboard, lettersToCheck, matched);
  changeComplexLettersStatus(puzzle, currentTry, results, keyboard, lettersToCheck, matched);
}
