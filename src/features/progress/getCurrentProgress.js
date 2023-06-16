import getEmptyField from '../gamefield/emptyField';
import keyboards from '../keyboard/keyboards';

export default function getCurrentProgress(dayNumber, language) {
  const todayDataForCurrentLanguage = language + dayNumber;

  if (!localStorage.getItem(todayDataForCurrentLanguage)) {
    const gameStartObj = {
      results: getEmptyField(),
      keyboard: keyboards[language],
      currentTry: 0,
      isWin: false,
      isGameOver: false,
    };
    localStorage.setItem(todayDataForCurrentLanguage, JSON.stringify(gameStartObj));
  }

  return JSON.parse(localStorage.getItem(todayDataForCurrentLanguage));
}
