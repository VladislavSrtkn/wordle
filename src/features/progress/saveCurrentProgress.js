import clearOldProgress from './clearOldProgress';

export default function saveCurrentProgress(dayNumber, language, progressObject) {
  const todayDataForCurrentLanguage = language + dayNumber;

  clearOldProgress(language, dayNumber);

  const json = JSON.stringify(progressObject);
  localStorage.setItem(todayDataForCurrentLanguage, json);
}
