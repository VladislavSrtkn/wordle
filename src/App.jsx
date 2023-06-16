import { Col, Container, Row } from 'react-bootstrap';

import { cloneDeep } from 'lodash';

import differenceInDays from 'date-fns/differenceInDays';

import { useEffect, useState, useMemo } from 'react';

import { ThemeContext } from './features/theme/theme-context';

import { COUNT_OF_LETTERS, COUNT_OF_TRIES, GAME_RELEASE_DATE } from './config';

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
import checkLanguageSelected from './features/banners/language/checkLanguageSelected';
import saveLanguageWasSelected from './features/banners/language/saveLanguageWasSelected';
import showShakeEffect from './features/gamefield/showShakeEffect';
import clearOldProgress from './features/progress/clearOldProgress';
import fetchLibrary from './features/word-libraries/fetchLibrary';

import StatisticsBanner from './features/banners/statistics/StatisticsBanner';
import GameField from './features/gamefield/GameField';
import Header from './features/header/Header';
import Keyboard from './features/keyboard/Keyboard';
import GameEndBanner from './features/banners/game-end/GameEndBanner';
import ErrorBanner from './features/banners/error/ErrorBanner';
import RulesBanner from './features/banners/rules/RulesBanner';
import LanguageBanner from './features/banners/language/LanguageBanner';

export default function App() {
  const dayNumber = differenceInDays(new Date(), GAME_RELEASE_DATE);
  const [language, setLanguage] = useState(() => getLanguage());
  const [wordsLibrary, setWordsLibrary] = useState([]);
  const [puzzle, setPuzzle] = useState(null);

  const todayProgress = useMemo(
    () => getCurrentProgress(dayNumber, language),
    [dayNumber, language]
  );

  const [results, setResults] = useState(todayProgress.results);
  const [keyboard, setKeyboard] = useState(todayProgress.keyboard);
  const [currentTry, setCurrentTry] = useState(todayProgress.currentTry);
  const [isGameOver, setIsGameOver] = useState(todayProgress.isGameOver);
  const [isWin, setIsWin] = useState(todayProgress.isWin);

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [theme, setTheme] = useState(() => getTheme());

  const [isVisibleRules, setIsVisibleRules] = useState(false);
  const [isVisibleStatistics, setIsVisibleStatistics] = useState(false);
  const [isVisibleGameEndBanner, setIsVisibleGameEndBanner] = useState(false);
  const [isVisibleLanguageBanner, setIsVisibleLanguageBanner] = useState(false);
  const [errorBannerText, setErrorBannerText] = useState(null);

  const [isLoadingLibrary, setIsLoadingLibrary] = useState(false);

  // *** Effects ***

  useEffect(() => {
    const isLanguageSelected = checkLanguageSelected();
    if (!isLanguageSelected) {
      setIsVisibleLanguageBanner(true);
      saveLanguageWasSelected();
    }
  }, []);

  useEffect(() => {
    fetchLibrary(language)
      .then((response) => {
        if (response.ok) {
          setIsLoadingLibrary(true);
          return response.json().then((library) => {
            setWordsLibrary(library);
            setPuzzle(() => getTodayPuzzle(library, dayNumber));
          });
        } else {
          console.log('Word library request failed. Response body: ' + response.body);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorBannerText(textData.err.fetchError);
      });
  }, [language, dayNumber]);

  useEffect(() => {
    textData.setLanguage(language);
    setCurrentLetterIndex(0);

    document
      .querySelector("meta[name='description']")
      .setAttribute('content', textData.end.description);

    document
      .querySelector("meta[property='og:description']")
      .setAttribute('content', textData.end.description);
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

  useEffect(() => clearOldProgress(dayNumber), [dayNumber]);

  useEffect(() => {
    if (isGameOver) {
      const timerId = setTimeout(() => setIsVisibleGameEndBanner(true), 2000);
      return () => clearTimeout(timerId);
    }
  }, [isGameOver, language]);

  useEffect(() => {
    const timerId = setTimeout(() => setErrorBannerText(null), 3000);
    return () => clearTimeout(timerId);
  }, [errorBannerText]);

  useEffect(() => {
    const backgroundColor = theme === 'light' ? '#ffffff' : '#6b6b6b';
    document.querySelector("meta[name='theme-color']").setAttribute('content', backgroundColor);
  }, [theme]);

  useEffect(() => {
    const canType = !(isVisibleLanguageBanner || isVisibleRules || isVisibleStatistics);

    function onKeydown(e) {
      const lowerCaseCharacter = e.key.toLowerCase();
      if (canType && checkCharacterOnKeyboard(lowerCaseCharacter, keyboard)) {
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
      showShakeEffect(currentTry);
      return;
    }

    if (!isLoadingLibrary) {
      setErrorBannerText(textData.err.fetchError);
      return;
    }

    if (!checkWordInLibrary(word.join(''), wordsLibrary)) {
      setErrorBannerText(textData.err.wordNotFound);
      showShakeEffect(currentTry);
      return;
    }

    const resultsCopy = cloneDeep(results);
    const keyboardCopy = cloneDeep(keyboard);

    changeLettersStatus(puzzle, currentTry, resultsCopy, keyboardCopy);
    setResults(resultsCopy);
    setKeyboard(keyboardCopy);

    if (word.join('') === puzzle) {
      setIsWin(true);
      setIsGameOver(true);
      saveStatisticsData(language, true, currentTry + 1);
      return;
    }

    if (currentTry === COUNT_OF_TRIES - 1) {
      setIsGameOver(true);
      saveStatisticsData(language, false);
      return;
    }

    setCurrentTry((prev) => prev + 1);
    setCurrentLetterIndex(0);
  }

  function removeLetter() {
    if (currentLetterIndex === 0) return;

    const resultsCopy = cloneDeep(results);
    resultsCopy[currentTry][currentLetterIndex - 1].value = '';

    setResults(resultsCopy);
    setCurrentLetterIndex((prev) => prev - 1);
  }

  function applyLetter(letter) {
    const resultsCopy = cloneDeep(results);
    resultsCopy[currentTry][currentLetterIndex].value = letter;

    setResults(resultsCopy);
    setCurrentLetterIndex((prev) => prev + 1);
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

    if (currentLetterIndex === COUNT_OF_LETTERS) return;

    applyLetter(buttonName);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme} d-flex flex-column w-100`}>
        <Header
          onShowRules={() => setIsVisibleRules(true)}
          onShowStatistics={() => setIsVisibleStatistics(true)}
          onShowLanguageBanner={() => setIsVisibleLanguageBanner(true)}
          onChangeTheme={handleChangeTheme}
        />

        <Container className='flex-grow-1'>
          <Row className='flex-column justify-content-center h-100'>
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
                currentlanguage={language}
                onHide={() => setIsVisibleLanguageBanner(false)}
                onChangeLanguage={handleChangeLanguage}
              />
            )}

            {isVisibleGameEndBanner && (
              <GameEndBanner
                attempts={currentTry + 1}
                results={results}
                isWin={isWin}
                puzzle={puzzle}
                dayNumber={dayNumber}
                onHide={() => setIsVisibleGameEndBanner(false)}
              />
            )}
          </Row>
        </Container>
      </div>
    </ThemeContext.Provider>
  );
}
