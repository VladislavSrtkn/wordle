import clearOldProgress from './clearOldProgress';

export default function saveCurrentProgress(
  dayNumber,
  language,
  results,
  keyboard,
  currentTry,
  isGameOver,
  isWin
) {
  const todayDataForCurrentLanguage = language + dayNumber;

  const progressObject = { results, keyboard, currentTry, isGameOver, isWin };
  const json = JSON.stringify(progressObject);
  localStorage.setItem(todayDataForCurrentLanguage, json);

  clearOldProgress(language, dayNumber);
}
