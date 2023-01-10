import clearOldProgress from './clearOldProgress';

export default function saveCurrentProgress(
  dayNumber,
  results,
  keyboard,
  currentTry,
  isVisibleEndBanner,
  isWin,
  isGameOver
) {
  clearOldProgress(dayNumber);

  const resultsObj = {
    results,
    keyboard,
    currentTry,
    isVisibleEndBanner,
    isWin,
    isGameOver,
  };
  const json = JSON.stringify(resultsObj);
  localStorage.setItem(dayNumber, json);
}
