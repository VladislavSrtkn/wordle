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
import checkLettersMatch from '../checkLettersMatch';
import { ThemeContext, themes } from '../theme-context';

export default function App() {
  const dayNumber = differenceInDays(new Date(), new Date(2023, 0, 7));
  const puzzle = wordsRuLang[dayNumber].word;

  const [currentProgress, setCurrentProgress] = useState(getCurrentProgress(dayNumber));
  const [currentLetter, setCurrentLetter] = useState(0);

  const [isVisibleRules, setIsVisibleRules] = useState(false);
  const [isVisibleStatistics, setIsVisibleStatistics] = useState(false);
  const [isVisibleEndBanner, setIsVisibleEndBanner] = useState(currentProgress.isVisibleEndBanner);
  const [errorBannerText, setErrorBannerText] = useState(null);

  const pickedTheme = currentProgress.theme;
  const [currentTheme, setCurrentTheme] = useState(themes[pickedTheme]);

  const results = currentProgress.results;
  const currentTry = currentProgress.currentTry;
  const isWin = currentProgress.isWin;
  const keyboard = currentProgress.keyboard;
  const isGameOver = currentProgress.isGameOver;
  const finalResults = results.slice(0, currentTry + 1);
  const progressCopy = _.cloneDeep(currentProgress);

  useEffect(() => setCurrentTheme(themes[pickedTheme]), [pickedTheme]);

  useEffect(() => {
    setIsVisibleEndBanner(false);
    setTimeout(() => setIsVisibleEndBanner(currentProgress.isVisibleEndBanner), 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => setErrorBannerText(null), 2000);
  }, [errorBannerText]);

  function toggleTheme() {
    progressCopy.theme = pickedTheme === 'light' ? 'dark' : 'light';
    setCurrentProgress(progressCopy);
    saveCurrentProgress(dayNumber, progressCopy);
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

    const checkedProgressCopy = checkLettersMatch(
      results[currentTry],
      puzzle,
      progressCopy,
      currentTry
    );
    setCurrentProgress(checkedProgressCopy);

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
    <ThemeContext.Provider value={currentTheme}>
      <Wrapper>
        <Header
          showRulesHandler={() => setIsVisibleRules(true)}
          showStatisticsHandler={() => setIsVisibleStatistics(true)}
          themeToggler={toggleTheme}
          theme={pickedTheme}
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
    </ThemeContext.Provider>
  );
}
