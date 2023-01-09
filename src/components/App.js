import { useState } from 'react';
import GameField from './Game_field';
import Header from './Header';
import Keyboard from './Keyboard';
import EndBanner from './EndBanner';
import gameStart from '../gameStart';
import keyboardRuLang from '../keyboardRuLang';

export default function App() {
  const [puzzle, setPuzzle] = useState('кабан');
  const [results, setResults] = useState(gameStart);
  const [currentTry, setCurrentTry] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [keyboard, setKeyboard] = useState(keyboardRuLang);
  const [isVisibleEndBanner, setIsVisibleEndBanner] = useState(false);

  const finalResults = results.slice(0, currentTry + 1);

  function changeKeyboardButtonStatus(name, status) {
    for (let i = 0; i < keyboard.length; i++) {
      const keyboardCopy = keyboard;
      keyboardCopy[i] = keyboardCopy[i].map((item) =>
        item.value === name && item.status !== 'inPlace' ? { value: name, status: status } : item
      );

      setKeyboard(keyboardCopy);
    }
  }

  function checkLettersMatch(word) {
    const check = [];
    const matched = [];

    for (let i = 0; i < word.length; i++) {
      const letter = word[i].value;

      if (!puzzle.includes(letter)) {
        setResults([...results], (results[currentTry][i].status = 'notInPuzzle'));
        changeKeyboardButtonStatus(letter, 'notInPuzzle');
      } else if (puzzle.includes(letter) && puzzle[i] === letter) {
        matched.push(letter);
        setResults([...results], (results[currentTry][i].status = 'inPlace'));
        changeKeyboardButtonStatus(letter, 'inPlace');
      } else {
        check.push({ value: word[i].value, position: i });
      }
    }

    for (let i = 0; i < check.length; i++) {
      const letter = check[i];
      const countInPuzzle = [...puzzle].filter((symb) => symb === letter.value).length;
      const countInMatched = [...matched].filter((symb) => symb === letter.value).length;

      if (countInPuzzle > countInMatched) {
        setResults([...results], (results[currentTry][letter.position].status = 'inPuzzle'));
        changeKeyboardButtonStatus(letter.value, 'inPuzzle');
        matched.push(letter.value);
      } else {
        setResults([...results], (results[currentTry][letter.position].status = 'notInPuzzle'));
      }
    }
  }

  function checkWordsMatch(word) {
    if (word === puzzle) {
      setIsWin(true);
      setIsVisibleEndBanner(true);
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

    if (currentTry === 5) {
      setIsVisibleEndBanner(true);
    }

    if (!checkWordsMatch(word.join('')) && currentTry !== 5) {
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

  function closeEndBanner() {
    setIsVisibleEndBanner(false);
  }

  return (
    <div
      style={{
        margin: 'auto',
        maxWidth: '28rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      {isVisibleEndBanner && (
        <EndBanner
          attempts={currentTry + 1}
          results={finalResults}
          isWin={isWin}
          puzzle={puzzle}
          closeHandler={closeEndBanner}
        />
      )}
      <Header />
      <GameField result={results} />
      <Keyboard handleClick={handleClick} keyboard={keyboard} />
    </div>
  );
}
