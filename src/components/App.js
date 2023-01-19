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
import Wrapper from './Wrapper';
import _ from 'lodash';
import changeKeyboardButtonStatus from '../changeKeyboardButtonStatus';

export default function App() {
  const dayNumber = differenceInDays(new Date(), new Date(2023, 0, 7));
  const puzzle = wordsRuLang[dayNumber].word;

  const [currentProgress, setCurrentProgress] = useState(getCurrentProgress(dayNumber));
  const [currentLetter, setCurrentLetter] = useState(0);

  const [isVisibleRules, setIsVisibleRules] = useState(false);
  const [isVisibleStatistics, setIsVisibleStatistics] = useState(false);
  const [isVisibleEndBanner, setIsVisibleEndBanner] = useState(currentProgress.isVisibleEndBanner);
  const [errorBannerText, setErrorBannerText] = useState(null);

  const results = currentProgress.results;
  const currentTry = currentProgress.currentTry;
  const isWin = currentProgress.isWin;
  const keyboard = currentProgress.keyboard;
  const isGameOver = currentProgress.isGameOver;
  const finalResults = results.slice(0, currentTry + 1);
  const progressCopy = _.cloneDeep(currentProgress);

  useEffect(() => {
    setIsVisibleEndBanner(false);
    setTimeout(() => setIsVisibleEndBanner(currentProgress.isVisibleEndBanner), 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => setErrorBannerText(null), 2000);
  }, [errorBannerText]);

  function checkLettersMatch(word) {
    const check = [];
    const matched = [];

    for (let i = 0; i < word.length; i++) {
      const letter = word[i].value;
      const currentLetter = progressCopy.results[currentTry][i];

      if (!puzzle.includes(letter)) {
        currentLetter.status = 'notInPuzzle';

        changeKeyboardButtonStatus(letter, 'notInPuzzle', progressCopy.keyboard);
      } else if (puzzle.includes(letter) && puzzle[i] === letter) {
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
    setCurrentProgress(progressCopy);
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
      return;
    }

    if (!checkWordInLibrary(word.join(''), wordsRuLang)) {
      setErrorBannerText(
        'В словаре игры нет такого слова. Попробуйте какое-нибудь другое. Например, АВТОР'
      );
      return;
    }

    checkLettersMatch(results[currentTry]);

    if (checkWordsMatch(word.join(''))) {
      setTimeout(() => setIsVisibleEndBanner(true), 2000);

      progressCopy.isWin = true;
      progressCopy.isGameOver = true;
      progressCopy.isVisibleEndBanner = true;
      setCurrentProgress(progressCopy);

      saveCurrentProgress(dayNumber, progressCopy);
      saveStatisticsData(true, currentTry + 1);

      return;
    }

    if (currentTry === 5) {
      setTimeout(() => setIsVisibleEndBanner(true), 2000);

      progressCopy.isGameOver = true;

      setCurrentProgress(progressCopy);
      saveCurrentProgress(dayNumber, progressCopy);
      saveStatisticsData(false);

      return;
    }

    progressCopy.currentTry += 1;
    setCurrentProgress(progressCopy);
    setCurrentLetter(0);
    saveCurrentProgress(dayNumber, progressCopy);
  }

  function removeSymbol() {
    if (currentLetter === 0) return;

    const lastLetter = progressCopy.results[currentTry][currentLetter - 1];
    lastLetter.value = '';

    setCurrentProgress(progressCopy);
    setCurrentLetter(currentLetter - 1);
  }

  function applySymbol(name) {
    const currentSquare = progressCopy.results[currentTry][currentLetter];
    currentSquare.value = name;

    setCurrentProgress(progressCopy);
    setCurrentLetter(currentLetter + 1);
  }

  function handleClick(buttonName) {
    if (isGameOver) return;

    if (buttonName === 'ввод') {
      submitWord();
      return;
    }

    if (buttonName === 'backSpace') {
      removeSymbol();
      return;
    }

    if (currentLetter === 5) return;

    applySymbol(buttonName);
  }

  return (
    <Wrapper>
      <Header
        showRulesHandler={() => setIsVisibleRules(true)}
        showStatisticsHandler={() => setIsVisibleStatistics(true)}
      />
      <GameField result={results} />
      <Keyboard handleClick={handleClick} keyboard={keyboard} />

      {errorBannerText && <ErrorBanner text={errorBannerText} />}

      {isVisibleRules && <RulesBanner closeHandler={() => setIsVisibleRules(false)} />}

      {isVisibleStatistics && (
        <StatisticsBanner closeHandler={() => setIsVisibleStatistics(false)} />
      )}

      {isVisibleEndBanner && (
        <EndBanner
          attempts={currentTry + 1}
          results={finalResults}
          isWin={isWin}
          puzzle={puzzle}
          closeHandler={() => setIsVisibleEndBanner(false)}
          dayNum={dayNumber}
        />
      )}
    </Wrapper>
  );
}
