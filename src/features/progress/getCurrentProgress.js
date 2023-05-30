import getEmptyField from '../gamefield/emptyField';
import keyboards from '../keyboard/keyboards';

export default function getCurrentProgress(dayNumber, language) {
  const todayDataForCurrentLanguage = language + dayNumber;

  if (localStorage.getItem(todayDataForCurrentLanguage)) {
    return JSON.parse(localStorage.getItem(todayDataForCurrentLanguage));
  } else {
    const gameStartObj = {
      results: getEmptyField(),
      keyboard: keyboards[language],
      currentTry: 0,
      isWin: false,
      isGameOver: false,
    };

    return gameStartObj;
  }
}
