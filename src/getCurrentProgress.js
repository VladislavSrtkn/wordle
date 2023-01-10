import gameStart from './gameStart';
import keyboardRuLang from './keyboardRuLang';

export default function getCurrentProgress(dayNumber) {
  if (localStorage.getItem(dayNumber)) {
    return JSON.parse(localStorage.getItem(dayNumber));
  } else {
    const gameStartObj = {
      results: gameStart,
      keyboard: keyboardRuLang,
      currentTry: 0,
      isVisibleEndBanner: false,
      isWin: false,
      isGameOver: false,
    };

    return gameStartObj;
  }
}
