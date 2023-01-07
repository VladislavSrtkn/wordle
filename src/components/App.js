import { useState } from 'react';
import GameField from './Game_field';
import Header from './Header';
import KeyboardRu from './KeyboardRu';

export default function App() {
  const [puzzle, setPuzzle] = useState('кабан');
  const [results, setResults] = useState([
    [
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
    ],
    [
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
    ],
    [
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
    ],
    [
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
    ],
    [
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
    ],
    [
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
      { value: '', status: '' },
    ],
  ]);
  const [currentTry, setCurrentTry] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isWin, setIsWin] = useState(false);

  function checkLettersMatch(word) {
    const check = [];
    const matched = [];

    for (let i = 0; i < word.length; i++) {
      const letter = word[i].value;

      if (!puzzle.includes(letter)) {
        let res = results;
        res[currentTry][i].status = 'notInPuzzle';
        setResults(res);
      } else if (puzzle.includes(letter) && puzzle[i] === letter) {
        matched.push(letter);
        let res = results;
        res[currentTry][i].status = 'inPlace';
        setResults(res);
      } else {
        check.push({ value: word[i].value, position: i });
      }
    }

    for (let i = 0; i < check.length; i++) {
      const letter = check[i];
      const countInPuzzle = [...puzzle].filter((symb) => symb === letter.value).length;
      const countInMatched = [...matched].filter((symb) => symb === letter.value).length;

      if (countInPuzzle > countInMatched) {
        let res = results;
        res[currentTry][letter.position].status = 'inPuzzle';
        setResults(res);
        matched.push(letter.value);
      } else {
        let res = results;
        res[currentTry][letter.position].status = 'notInPuzzle';
        setResults(res);
      }
    }
  }

  function checkWordsMatch(word) {
    if (word === puzzle) {
      setIsWin(true);
      alert('You win!');
      return true;
    }

    return false;
  }

  function submitWord() {
    let word = [];

    for (let i = 0; i < results[currentTry].length; i++) {
      word.push(results[currentTry][i].value);
    }

    if (word.includes('')) {
      console.log('Malo bukv!!!!'); //change
      return;
    }

    checkLettersMatch(results[currentTry]);

    if (!checkWordsMatch(word.join('')) && currentTry !== 6) {
      setCurrentTry(currentTry + 1);
      setCurrentLetter(0);
      return;
    }
  }

  function removeSymbol() {
    if (currentLetter === 0) {
      return;
    }

    let res = results;
    res[currentTry][currentLetter - 1].value = '';
    setCurrentLetter(currentLetter - 1);
  }

  function applySymbol(name) {
    let res = results;
    res[currentTry][currentLetter].value = name;
    setResults(res);
    setCurrentLetter(currentLetter + 1);
  }

  function handleClick(buttonName) {
    if (buttonName === 'ввод') {
      submitWord();
      return;
    }

    if (buttonName === 'backSpace') {
      removeSymbol();
      return;
    }

    if (currentLetter === 5) {
      return;
    }

    applySymbol(buttonName);
  }

  return (
    <div
      style={{
        maxWidth: '28rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Header />
      <GameField result={results} />
      <KeyboardRu handleClick={handleClick} />
    </div>
  );
}
