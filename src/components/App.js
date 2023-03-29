import { Col, Container, Row } from 'react-bootstrap';

import _ from 'lodash';

import differenceInDays from 'date-fns/differenceInDays';

import { useEffect, useState } from 'react';
import { ThemeContext, themes } from '../theme-context';

import checkWordInLibrary from '../checkWordInLibrary';
import saveCurrentProgress from '../saveCurrentProgress';
import getCurrentProgress from '../getCurrentProgress';
import saveStatisticsData from '../saveStatisticsData';
import checkLettersMatch from '../checkLettersMatch';
import getTheme from '../getTheme';
import saveTheme from '../saveTheme';
import getLanguage from '../getLanguage';
import saveLanguage from '../saveLanguage';
import textData from '../textData';
import getTodayPuzzle from '../getTodayPuzzle';
import wordsRuLang from '../wordsRuLang';
import wordsEnLang from '../wordsEnLang';

import StatisticsBanner from './StatisticsBanner';
import GameField from './Game_field';
import Header from './Header';
import Keyboard from './Keyboard';
import EndBanner from './EndBanner';
import ErrorBanner from './ErrorBanner';
import RulesBanner from './RulesBanner';

export default function App() {
  const [language, setLanguage] = useState(getLanguage());
  textData.setLanguage(language);
  useEffect(() => {
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', textData.description);

    document
      .querySelector("meta[property='og:description']")
      .setAttribute('content', textData.description);
  }, [language]);

  const dayNumber = differenceInDays(new Date(), new Date(2023, 0, 7));

  const wordsLibrary = language === 'ru' ? wordsRuLang : wordsEnLang;
  const puzzle = getTodayPuzzle(wordsLibrary, dayNumber);

  const [currentProgress, setCurrentProgress] = useState(getCurrentProgress(dayNumber, language));
  useEffect(
    () => setCurrentProgress(getCurrentProgress(dayNumber, language)),
    [language, dayNumber]
  );

  const results = currentProgress.results;
  const currentTry = currentProgress.currentTry;
  const isWin = currentProgress.isWin;
  const keyboard = currentProgress.keyboard;
  const isGameOver = currentProgress.isGameOver;
  const finalResults = results.slice(0, currentTry + 1);
  const progressCopy = _.cloneDeep(currentProgress);

  const [currentLetter, setCurrentLetter] = useState(0);

  const [isVisibleRules, setIsVisibleRules] = useState(false);
  const [isVisibleStatistics, setIsVisibleStatistics] = useState(false);

  const [isVisibleEndBanner, setIsVisibleEndBanner] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(
      () => setIsVisibleEndBanner(currentProgress.isVisibleEndBanner),
      2000
    );
    return () => clearTimeout(timerId);
  }, [currentProgress]);

  const [errorBannerText, setErrorBannerText] = useState(null);
  useEffect(() => {
    const timerId = setTimeout(() => setErrorBannerText(null), 3000);
    return () => clearTimeout(timerId);
  }, [errorBannerText]);

  let pickedTheme = getTheme();
  const [currentTheme, setCurrentTheme] = useState(themes[pickedTheme]);
  useEffect(() => {
    const backgroundColor = themes[pickedTheme]['background'];
    document.querySelector("meta[name='theme-color']").setAttribute('content', backgroundColor);
  }, [pickedTheme]);

  function toggleTheme() {
    pickedTheme = pickedTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(themes[pickedTheme]);
    saveTheme(pickedTheme);
  }

  function changeLanguage() {
    const anotherLanguage = language !== 'en' ? 'en' : 'ru';

    saveLanguage(anotherLanguage);
    setLanguage(getLanguage());
    setCurrentLetter(0);
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
      setErrorBannerText(textData.emptyLetter);
      return;
    }

    if (!checkWordInLibrary(word.join(''), wordsLibrary)) {
      setErrorBannerText(textData.wordNotFound);
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

      saveCurrentProgress(dayNumber, language, progressCopy);
      saveStatisticsData(language, true, currentTry + 1);

      return;
    }

    if (currentTry === 5) {
      setTimeout(() => setIsVisibleEndBanner(true), 2000);

      progressCopy.isGameOver = true;
      progressCopy.isVisibleEndBanner = true;

      setCurrentProgress(progressCopy);
      saveCurrentProgress(dayNumber, language, progressCopy);
      saveStatisticsData(language, false);

      return;
    }

    progressCopy.currentTry += 1;
    setCurrentProgress(progressCopy);
    setCurrentLetter(0);
    saveCurrentProgress(dayNumber, language, progressCopy);
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

    if (buttonName === 'enter') {
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
      <Container fluid style={{ ...currentTheme }}>
        <Row className='justify-content-center full-height'>
          <Col xs sm={8} md={6} lg={4} className='d-flex flex-column justify-content-between'>
            <Header
              handleShowRules={() => setIsVisibleRules(true)}
              handleShowStatistics={() => setIsVisibleStatistics(true)}
              handleChangeTheme={toggleTheme}
              theme={pickedTheme}
              handleChangeLanguage={changeLanguage}
              language={language}
            />

            <GameField result={results} />
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
                results={finalResults}
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
