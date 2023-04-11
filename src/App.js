import { Col, Container, Row } from 'react-bootstrap';

import _ from 'lodash';

import differenceInDays from 'date-fns/differenceInDays';

import { useEffect, useState } from 'react';
import { ThemeContext, themes } from './features/theme/theme-context';

import checkWordInLibrary from './features/word-libraries/checkWordInLibrary';
import saveCurrentProgress from './features/progress/saveCurrentProgress';
import getCurrentProgress from './features/progress/getCurrentProgress';
import saveStatisticsData from './features/banners/statistics/saveStatisticsData';
import checkLettersMatch from './features/gamefield/checkLettersMatch';
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

  const [language, setLanguage] = useState(getLanguage());
  const [progress, setProgress] = useState(getCurrentProgress(dayNumber, language));
  const [currentLetter, setCurrentLetter] = useState(0);
  const [theme, setTheme] = useState(getTheme());
  const [isVisibleRules, setIsVisibleRules] = useState(false);
  const [isVisibleStatistics, setIsVisibleStatistics] = useState(false);
  const [isVisibleEndBanner, setIsVisibleEndBanner] = useState(false);
  const [errorBannerText, setErrorBannerText] = useState(null);

  const wordsLibrary = language === 'ru' ? wordsRuLang : wordsEnLang;
  const puzzle = getTodayPuzzle(wordsLibrary, dayNumber);

  const { results, keyboard, currentTry, isWin, isGameOver } = progress;
  const progressCopy = _.cloneDeep(progress);

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

  useEffect(() => setProgress(getCurrentProgress(dayNumber, language)), [language, dayNumber]);

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
    // Here 

    checkLettersMatch(puzzle, progressCopy);

    if (word.join('') === puzzle) {
      progressCopy.isWin = true;
      progressCopy.isGameOver = true;

      setProgress(progressCopy);
      saveCurrentProgress(dayNumber, language, progressCopy);
      saveStatisticsData(language, true, currentTry + 1);
      return;
    }

    if (currentTry === 5) {
      progressCopy.isGameOver = true;

      setProgress(progressCopy);
      saveCurrentProgress(dayNumber, language, progressCopy);
      saveStatisticsData(language, false);
      return;
    }

    progressCopy.currentTry += 1;
    setProgress(progressCopy);
    setCurrentLetter(0);
    saveCurrentProgress(dayNumber, language, progressCopy);
  }

  function removeLetter() {
    if (currentLetter === 0) return;

    const lastLetter = progressCopy.results[currentTry][currentLetter - 1];
    lastLetter.value = '';

    setProgress(progressCopy);
    setCurrentLetter((prev) => prev - 1);
  }

  function applyLetter(name) {
    const currentSquare = progressCopy.results[currentTry][currentLetter];
    currentSquare.value = name;

    setProgress(progressCopy);
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
                dayNum={dayNumber}
              />
            )}
          </Col>
        </Row>
      </Container>
    </ThemeContext.Provider>
  );
}
