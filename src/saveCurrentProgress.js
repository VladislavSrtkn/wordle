import clearOldProgress from './clearOldProgress';

export default function saveCurrentProgress(dayNumber, progressObject) {
  clearOldProgress(dayNumber);

  const json = JSON.stringify(progressObject);
  localStorage.setItem(dayNumber, json);
}
