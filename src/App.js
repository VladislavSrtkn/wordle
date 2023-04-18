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
import checkCharacterOnKeyboard from './features/keyboard/checkCharacterOnKeyboard';
import getTheme from './features/theme/getTheme';
import saveTheme from './features/theme/saveTheme';
import getLanguage from './features/banners/language/getLanguage';
import saveLanguage from './features/banners/language/saveLanguage';
import textData from './features/banners/language/textData';
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
import LanguageBanner from './features/banners/language/LanguageBanner';

export default function App() {
  const dayNumber = differenceInDays(new Date(), new Date(2023, 0, 7));
  const [language, setLanguage] = useState(() => getLanguage());

  const todayProgress = useMemo(
    () => getCurrentProgress(dayNumber, language),
    [dayNumber, language]
  );

  const [results, setResults] = useState(todayProgress.results);
  const [keyboard, setKeyboard] = useState(todayProgress.keyboard);
  const [currentTry, setCurrentTry] = useState(todayProgress.currentTry);
  const [isGameOver, setIsGameOver] = useState(todayProgress.isGameOver);
  const [isWin, setIsWin] = useState(todayProgress.isWin);

  const [currentLetter, setCurrentLetter] = useState(0);
  const [theme, setTheme] = useState(() => getTheme());
  const [isVisibleRules, setIsVisibleRules] = useState(false);
  const [isVisibleStatistics, setIsVisibleStatistics] = useState(false);
  const [isVisibleEndBanner, setIsVisibleEndBanner] = useState(false);
  const [isVisibleLanguageBanner, setIsVisibleLanguageBanner] = useState(false);
  const [errorBannerText, setErrorBannerText] = useState(null);

  const wordsLibrary = language === 'ru' ? wordsRuLang : wordsEnLang;
  const puzzle = getTodayPuzzle(wordsLibrary, dayNumber);

  const windowHeight = document.documentElement.clientHeight + 'px';

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
    setResults(todayProgress.results);
    setKeyboard(todayProgress.keyboard);
    setCurrentTry(todayProgress.currentTry);
    setIsGameOver(todayProgress.isGameOver);
    setIsWin(todayProgress.isWin);
  }, [todayProgress]);

  useEffect(() => {
    const progressObject = { results, keyboard, currentTry, isGameOver, isWin };
    saveCurrentProgress(dayNumber, language, progressObject);
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

  useEffect(() => {
    function onKeydown(e) {
      const lowerCaseCharacter = e.key.toLowerCase();
      if (checkCharacterOnKeyboard(lowerCaseCharacter, keyboard)) {
        handleClick(lowerCaseCharacter);
      }
    }

    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  // *** Functions ***

  function submitWord() {
    const word = results[currentTry].map((item) => item.value);

    if (word.includes('')) {
      setErrorBannerText(textData.err.emptyLetter);
      return;
    }

    if (!checkWordInLibrary(word.join(''), wordsLibrary)) {
      setErrorBannerText(textData.err.wordNotFound);
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

  function handleChangeLanguage(newLanguage) {
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

    if (buttonName === 'backspace') {
      removeLetter();
      return;
    }

    if (currentLetter === 5) return;

    applyLetter(buttonName);
  }

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <Container
        fluid
        className='d-flex flex-column'
        style={{ ...themes[theme], height: windowHeight }}
      >
        <Header
          onShowRules={() => setIsVisibleRules(true)}
          onShowStatistics={() => setIsVisibleStatistics(true)}
          onShowLanguageBanner={() => setIsVisibleLanguageBanner(true)}
          onChangeTheme={handleChangeTheme}
          theme={theme}
        />

        <Row className='justify-content-center flex-grow-1'>
          <Col xs sm={8} md={6} lg={4} className='d-flex flex-column justify-content-between'>
            <GameField data={results} />

            <Keyboard onClick={handleClick} keyboard={keyboard} />

            {errorBannerText && (
              <ErrorBanner text={errorBannerText} onClose={() => setErrorBannerText(null)} />
            )}

            {isVisibleRules && <RulesBanner onHide={() => setIsVisibleRules(false)} />}

            {isVisibleStatistics && (
              <StatisticsBanner language={language} onHide={() => setIsVisibleStatistics(false)} />
            )}

            {isVisibleLanguageBanner && (
              <LanguageBanner
                onHide={() => setIsVisibleLanguageBanner(false)}
                onChangeLanguage={handleChangeLanguage}
                currentlanguage={language}
              />
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
