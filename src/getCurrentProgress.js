import emptyField from './emptyField';
import keyboards from './keyboards';

export default function getCurrentProgress(dayNumber, language) {
  const todayDataForCurrentLanguage = language + dayNumber;

  if (localStorage.getItem(todayDataForCurrentLanguage)) {
    return JSON.parse(localStorage.getItem(todayDataForCurrentLanguage));
  } else {
    const gameStartObj = {
      results: emptyField,
      keyboard: keyboards[language],
      currentTry: 0,
      isVisibleEndBanner: false,
      isWin: false,
      isGameOver: false,
    };

    return gameStartObj;
  }
}
