import { Col, Container, Row } from 'react-bootstrap';

import _ from 'lodash';

import differenceInDays from 'date-fns/differenceInDays';

import { useEffect, useState, useMemo } from 'react';
import { ThemeContext, themes } from './features/theme/theme-context';

import checkWordInLibrary from './features/word-libraries/checkWordInLibrary';
import saveCurrentProgress from './features/progress/saveCurrentProgress';
import getCurrentProgress from './features/progress/getCurrentProgress';
import saveStatisticsData from './features/banners/statistics/saveStatisticsData';
import changeLettersStatus from './features/gamefield/changeLettersStatus';
import getTheme from './features/theme/getTheme';
import saveTheme from './features/theme/saveTheme';
import getLanguage from './features/language/getLanguage';
import saveLanguage from './features/language/saveLanguage';
import textData from './features/language/textData';
import getTodayPuzzle from './features/word-libraries/getTodayPuzzle';
import wordsRuLang from './features/word-libraries/wordsRuLang';
import wordsEnLang from './features/word-libraries/wordsEnLang';

import StatisticsBanner from './features/banners/statistics/StatisticsBanner';
import GameField from './features/gamefield/Gamefield';
import Header from './features/header/Header';
import Keyboard from './features/keyboard/Keyboard';
import EndBanner from './features/banners/game-end/EndBanner';
import ErrorBanner from './features/banners/error/ErrorBanner';
import RulesBanner from './features/banners/rules/RulesBanner';

export default function App() {
  const dayNumber = differenceInDays(new Date(), new Date(2023, 0, 7));
  const [language, setLanguage] = useState(() => getLanguage());

  const todayProgressFromStorage = useMemo(
    () => getCurrentProgress(dayNumber, language),
    [dayNumber, language]
  );

  const [results, setResults] = useState(todayProgressFromStorage.results);
  const [keyboard, setKeyboard] = useState(todayProgressFromStorage.keyboard);
  const [currentTry, setCurrentTry] = useState(todayProgressFromStorage.currentTry);
  const [isGameOver, setIsGameOver] = useState(todayProgressFromStorage.isGameOver);
  const [isWin, setIsWin] = useState(todayProgressFromStorage.isWin);

  const [currentLetter, setCurrentLetter] = useState(0);
  const [theme, setTheme] = useState(() => getTheme());
  const [isVisibleRules, setIsVisibleRules] = useState(false);
  const [isVisibleStatistics, setIsVisibleStatistics] = useState(false);
  const [isVisibleEndBanner, setIsVisibleEndBanner] = useState(false);
  const [errorBannerText, setErrorBannerText] = useState(null);

  const wordsLibrary = language === 'ru' ? wordsRuLang : wordsEnLang;
  const puzzle = getTodayPuzzle(wordsLibrary, dayNumber);

  const windowHeight = document.documentElement.clientHeight + 'px';

  // localStorage.clear();

  // *** Effects ***

  useEffect(() => {
    textData.setLanguage(language);

    document
      .querySelector("meta[name='description']")
      .setAttribute('content', textData.description);

    document
      .querySelector("meta[property='og:description']")
      .setAttribute('content', textData.description);
  }, [language]);

  useEffect(() => {
    setResults(todayProgressFromStorage.results);
    setKeyboard(todayProgressFromStorage.keyboard);
    setCurrentTry(todayProgressFromStorage.currentTry);
    setIsGameOver(todayProgressFromStorage.isGameOver);
    setIsWin(todayProgressFromStorage.isWin);
  }, [todayProgressFromStorage]);

  useEffect(() => {
    saveCurrentProgress(dayNumber, language, results, keyboard, currentTry, isGameOver, isWin);
    // eslint-disable-next-line
  }, [keyboard]);

  useEffect(() => {
    if (isGameOver) {
      const timerId = setTimeout(() => setIsVisibleEndBanner(true), 2000);
      return () => clearTimeout(timerId);
    }
  }, [isGameOver]);

  useEffect(() => {
    const timerId = setTimeout(() => setErrorBannerText(null), 3000);
    return () => clearTimeout(timerId);
  }, [errorBannerText]);

  useEffect(() => {
    const backgroundColor = themes[theme]['background'];
    document.querySelector("meta[name='theme-color']").setAttribute('content', backgroundColor);
  }, [theme]);

  // *** Functions ***

  function submitWord() {
    const word = results[currentTry].map((item) => item.value);

    if (word.includes('')) {
      setErrorBannerText(textData.emptyLetter);
      return;
    }

    if (!checkWordInLibrary(word.join(''), wordsLibrary)) {
      setErrorBannerText(textData.wordNotFound);
      return;
    }

    const resultsCopy = _.cloneDeep(results);
    const keyboardCopy = _.cloneDeep(keyboard);

    changeLettersStatus(puzzle, currentTry, resultsCopy, keyboardCopy);
    setResults(resultsCopy);
    setKeyboard(keyboardCopy);

    if (word.join('') === puzzle) {
      setIsWin(true);
      setIsGameOver(true);
      saveStatisticsData(language, true, currentTry + 1);
      return;
    }

    if (currentTry === 5) {
      setIsGameOver(true);
      saveStatisticsData(language, false);
      return;
    }

    setCurrentTry((prev) => prev + 1);
    setCurrentLetter(0);
  }

  function removeLetter() {
    if (currentLetter === 0) return;

    const resultsCopy = _.cloneDeep(results);
    resultsCopy[currentTry][currentLetter - 1].value = '';

    setResults(resultsCopy);
    setCurrentLetter((prev) => prev - 1);
  }

  function applyLetter(name) {
    const resultsCopy = _.cloneDeep(results);
    resultsCopy[currentTry][currentLetter].value = name;

    setResults(resultsCopy);
    setCurrentLetter((prev) => prev + 1);
  }

  // *** Handlers ***

  function handleChangeTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    saveTheme(newTheme);
  }

  function handleChangeLanguage() {
    const newLanguage = language === 'ru' ? 'en' : 'ru';

    setLanguage(newLanguage);
    saveLanguage(newLanguage);
    setCurrentLetter(0);
  }

  function handleClick(buttonName) {
    if (isGameOver) return;

    if (buttonName === 'enter') {
      submitWord();
      return;
    }

    if (buttonName === 'backSpace') {
      removeLetter();
      return;
    }

    if (currentLetter === 5) return;

    applyLetter(buttonName);
  }

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <Container fluid className='d-flex' style={{ ...themes[theme], height: windowHeight }}>
        <Row className='justify-content-center flex-grow-1'>
          <Col xs sm={8} md={6} lg={4} className='d-flex flex-column justify-content-between'>
            <Header
              onShowRules={() => setIsVisibleRules(true)}
              onShowStatistics={() => setIsVisibleStatistics(true)}
              onChangeTheme={handleChangeTheme}
              onChangeLanguage={handleChangeLanguage}
              theme={theme}
              language={language}
            />

            <GameField data={results} />

            <Keyboard onClick={handleClick} keyboard={keyboard} />

            {errorBannerText && (
              <ErrorBanner text={errorBannerText} onClose={() => setErrorBannerText(null)} />
            )}

            {isVisibleRules && <RulesBanner onHide={() => setIsVisibleRules(false)} />}

            {isVisibleStatistics && (
              <StatisticsBanner language={language} onHide={() => setIsVisibleStatistics(false)} />
            )}

            {isVisibleEndBanner && (
              <EndBanner
                attempts={currentTry + 1}
                results={results}
                isWin={isWin}
                puzzle={puzzle}
                onHide={() => setIsVisibleEndBanner(false)}
                dayNumber={dayNumber}
              />
            )}
          </Col>
        </Row>
      </Container>
    </ThemeContext.Provider>
  );
}
