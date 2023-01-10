export default function getStatisticsData() {
  if (localStorage.getItem('statistics')) {
    return JSON.parse(localStorage.getItem('statistics'));
  } else {
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
}
