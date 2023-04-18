import clearOldProgress from './clearOldProgress';

export default function saveCurrentProgress(dayNumber, language, progress) {
  const todayDataForCurrentLanguage = language + dayNumber;

  const json = JSON.stringify(progress);
  localStorage.setItem(todayDataForCurrentLanguage, json);

  clearOldProgress(language, dayNumber);
}
