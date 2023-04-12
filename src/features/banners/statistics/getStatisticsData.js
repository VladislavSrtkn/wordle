export default function getStatisticsData(language) {
  const statsForCurrentLanguage = 'statistics' + language;
  if (localStorage.getItem(statsForCurrentLanguage)) {
    return JSON.parse(localStorage.getItem(statsForCurrentLanguage));
  }
  const statisticsObj = {
    gamesPlayed: 0,
    gamesWon: 0,
    winStreak: 0,
    maxWinStreak: 0,
    attempts: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    },
  };

  return statisticsObj;
}
