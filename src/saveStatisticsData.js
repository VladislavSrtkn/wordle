import getStatisticsData from './getStatisticsData';

export default function saveStatisticsData(language, isWin, attempt) {
  const statistics = getStatisticsData(language);

  statistics.gamesPlayed++;

  if (isWin) {
    statistics.gamesWon++;
    statistics.winStreak++;
    statistics.attempts[attempt]++;
  } else {
    statistics.winStreak = 0;
  }

  if (statistics.winStreak > statistics.maxWinStreak) {
    statistics.maxWinStreak = statistics.winStreak;
  }

  const json = JSON.stringify(statistics);
  const statsForCurrentLanguage = 'statistics' + language;

  localStorage.setItem(statsForCurrentLanguage, json);
}
