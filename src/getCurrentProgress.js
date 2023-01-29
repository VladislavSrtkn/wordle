import emptyField from './emptyField';
import keyboardRuLang from './keyboardRuLang';

export default function getCurrentProgress(dayNumber) {
  if (localStorage.getItem(dayNumber)) {
    return JSON.parse(localStorage.getItem(dayNumber));
  } else {
    const gameStartObj = {
      theme: 'light',
      results: emptyField,
      keyboard: keyboardRuLang,
      currentTry: 0,
      isVisibleEndBanner: false,
      isWin: false,
      isGameOver: false,
    };

    return gameStartObj;
  }
}
