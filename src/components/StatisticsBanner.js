import BannersWrapper from './BannersWrapper';
import getStatisticsData from '../getStatisticsData';
import countAttempts from '../countAttempts';
import AttemptsStatistics from './AttemptsStatistics';
import textData from '../textData';

export default function StatisticsBanner({ language, closeHandler }) {
  const statistics = getStatisticsData(language);
  const gamesPlayed = statistics.gamesPlayed;
  const winRate = Math.round((statistics.gamesWon / statistics.gamesPlayed) * 100) || 0;
  const winStreak = statistics.winStreak;
  const maxWinStreak = statistics.maxWinStreak;
  const totalAttempts = countAttempts(statistics);
  const averageAttempts = Math.round(totalAttempts / gamesPlayed) || 0;

  return (
    <BannersWrapper closeHandler={closeHandler}>
      <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>{textData.statistic}</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          borderBottom: '1px solid #d7d7d7',
          paddingBottom: '1rem',
          paddingTop: '1rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>{gamesPlayed}</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>{textData.gamesPlayed}</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>{winRate}%</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>{textData.totalWins}</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          borderBottom: '1px solid #d7d7d7',
          paddingBottom: '1rem',
          paddingTop: '1rem',
          gap: '0.4rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>{winStreak}</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>{textData.winStreakNow}</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>{averageAttempts}</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>{textData.attemptsAverage}</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>{maxWinStreak}</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>{textData.winStreakMax}</span>
        </div>
      </div>
      <AttemptsStatistics attemtptsObj={statistics.attempts} />
    </BannersWrapper>
  );
}
