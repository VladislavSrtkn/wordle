import { COUNT_OF_TRIES } from '../../../config';

function getAttemptsObject(count) {
  const attempts = {};

  for (let i = 1; i <= count; i++) {
    attempts[i] = 0;
  }

  return attempts;
}

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
    attempts: getAttemptsObject(COUNT_OF_TRIES),
  };

  return statisticsObj;
}
