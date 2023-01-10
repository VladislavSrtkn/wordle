export default function clearOldProgress(todayNumber) {
  for (let i = 1; i < todayNumber; i++) {
    localStorage.removeItem(i);
  }
}
