import Wrapper from './Wrapper';
import getStatisticsData from '../getStatisticsData';
import countAttempts from '../countAttempts';

export default function StatisticsBanner({ closeHandler }) {
  const statistics = getStatisticsData();
  const gamesPlayed = statistics.gamesPlayed;
  const winRate = (statistics.gamesWon / statistics.gamesPlayed) * 100 || 0;
  const winStreak = statistics.winStreak;
  const maxWinStreak = statistics.maxWinStreak;
  const totalAttempts = countAttempts(statistics);
  const averageAttempts = Math.round(totalAttempts / gamesPlayed) || 0;

  return (
    <Wrapper closeHandler={closeHandler}>
      <h3 style={{ textAlign: 'center' }}>СТАТИСТИКА</h3>
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
          <span style={{ fontSize: '0.8rem' }}>Сыграно</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>{winRate}%</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>Побед всего</span>
        </div>
      </div>

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
          <span style={{ fontSize: '1.8rem' }}>{winStreak}</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>Побед подряд сейчас</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>{averageAttempts}</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>Попыток на игру в среднем</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>{maxWinStreak}</span>
          <br />
          <span style={{ fontSize: '0.8rem' }}>Подряд максимум</span>
        </div>
      </div>
    </Wrapper>
  );
}
