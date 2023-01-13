import { useEffect, useState } from 'react';
import GameField from './Game_field';
import Header from './Header';
import Keyboard from './Keyboard';
import EndBanner from './EndBanner';
import wordsRuLang from '../wordsRuLang';
import differenceInDays from 'date-fns/differenceInDays';
import checkWordInLibrary from '../checkWordInLibrary';
import ErrorBanner from './ErrorBanner';
import RulesBanner from './RulesBanner';
import saveCurrentProgress from '../saveCurrentProgress';
import getCurrentProgress from '../getCurrentProgress';
import saveStatisticsData from '../saveStatisticsData';
import StatisticsBanner from './StatisticsBanner';

// localStorage.clear();

export default function App() {
  const [dayNumber, setDayNumber] = useState(differenceInDays(new Date(), new Date(2023, 0, 7)));
  const currentProgress = getCurrentProgress(dayNumber);
  const [puzzle, setPuzzle] = useState(wordsRuLang[dayNumber].word);
  const [results, setResults] = useState(currentProgress.results);
  const [currentTry, setCurrentTry] = useState(currentProgress.currentTry);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isWin, setIsWin] = useState(currentProgress.isWin);
  const [keyboard, setKeyboard] = useState(currentProgress.keyboard);
  const [isVisibleEndBanner, setIsVisibleEndBanner] = useState(currentProgress.isVisibleEndBanner);
  const [isVisibleRules, setIsVisibleRules] = useState(false);
  const [isVisibleStatistics, setIsVisibleStatistics] = useState(false);
  const [errorBannerText, setErrorBannerText] = useState(null);
  const [isGameOver, setIsGameOver] = useState(currentProgress.isGameOver);

  const finalResults = results.slice(0, currentTry + 1);

  const windowHeight = document.documentElement.clientHeight + 'px';

  useEffect(() => {
    setIsVisibleEndBanner(false);
    setTimeout(() => setIsVisibleEndBanner(currentProgress.isVisibleEndBanner), 2000);
  }, []);

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
      return true;
    }
    return false;
  }

  function submitWord() {
    const word = [];

    for (let i = 0; i < results[currentTry].length; i++) {
      word.push(results[currentTry][i].value);
    }

    if (word.includes('')) {
      setErrorBannerText('В слове не должно быть пустых букв.');
      setTimeout(() => setErrorBannerText(null), 2000);
      return;
    }

    if (!checkWordInLibrary(word.join(''), wordsRuLang)) {
      setErrorBannerText(
        'В словаре игры нет такого слова. Попробуйте какое-нибудь другое. Например, АВТОР'
      );
      setTimeout(() => setErrorBannerText(null), 2000);
      return;
    }

    checkLettersMatch(results[currentTry]);

    if (checkWordsMatch(word.join(''))) {
      setTimeout(() => setIsVisibleEndBanner(true), 2000);
      setIsWin(true);
      setIsGameOver(true);
      saveCurrentProgress(dayNumber, results, keyboard, currentTry, true, true, true);
      saveStatisticsData(true, currentTry + 1);
      return;
    }

    if (currentTry === 5) {
      setTimeout(() => setIsVisibleEndBanner(true), 2000);
      setIsGameOver(true);
      saveCurrentProgress(dayNumber, results, keyboard, currentTry, true, isWin, true);
      saveStatisticsData(false);

      return;
    }

    setCurrentTry(currentTry + 1);
    setCurrentLetter(0);

    saveCurrentProgress(
      dayNumber,
      results,
      keyboard,
      currentTry + 1,
      isVisibleEndBanner,
      isWin,
      isGameOver
    );
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
    if (isGameOver) {
      return;
    }

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
        justifyContent: 'space-between',
        alignItems: 'center',
        height: windowHeight,
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
          dayNum={dayNumber}
        />
      )}

      {errorBannerText && <ErrorBanner text={errorBannerText} />}

      {isVisibleRules && <RulesBanner closeHandler={() => setIsVisibleRules(false)} />}

      {isVisibleStatistics && (
        <StatisticsBanner closeHandler={() => setIsVisibleStatistics(false)} />
      )}

      <Header
        showRulesHandler={() => setIsVisibleRules(true)}
        showStatisticsHandler={() => setIsVisibleStatistics(true)}
      />
      <GameField result={results} />
      <Keyboard handleClick={handleClick} keyboard={keyboard} />
    </div>
  );
}
