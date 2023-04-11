export default function clearOldProgress(language, todayNumber) {
  for (let i = 1; i < todayNumber; i++) {
    const previousSave = language + i;
    localStorage.removeItem(previousSave);
  }
}
