import { Stack } from 'react-bootstrap';

import textData from '../textData';

import getStatisticsData from '../getStatisticsData';
import countAttempts from '../countAttempts';

import BannersWrapper from './BannersWrapper';
import AttemptsStatistics from './AttemptsStatistics';

export default function StatisticsBanner({ language, onHide }) {
  const statistics = getStatisticsData(language);
  const gamesPlayed = statistics.gamesPlayed;
  const winRate = Math.round((statistics.gamesWon / statistics.gamesPlayed) * 100) || 0;
  const winStreak = statistics.winStreak;
  const maxWinStreak = statistics.maxWinStreak;
  const totalAttempts = countAttempts(statistics);
  const averageAttempts = Math.round(totalAttempts / gamesPlayed) || 0;

  return (
    <BannersWrapper onHide={onHide} title={textData.statistic}>
      <Stack>
        <div className='d-flex justify-content-around border-bottom py-3'>
          <div className='text-center'>
            <span className='fs-2'>{gamesPlayed}</span>
            <br />
            <span>{textData.gamesPlayed}</span>
          </div>
          <div className='text-center'>
            <span className='fs-2'>{winRate}%</span>
            <br />
            <span>{textData.totalWins}</span>
          </div>
        </div>

        <div className='d-flex justify-content-around border-bottom py-3'>
          <div className='text-center'>
            <span className='fs-2'>{winStreak}</span>
            <br />
            <span className='small-fs'>{textData.winStreakNow}</span>
          </div>
          <div className='text-center'>
            <span className='fs-2'>{averageAttempts}</span>
            <br />
            <span className='small-fs'>{textData.attemptsAverage}</span>
          </div>
          <div className='text-center'>
            <span className='fs-2'>{maxWinStreak}</span>
            <br />
            <span className='small-fs'>{textData.winStreakMax}</span>
          </div>
        </div>
        <AttemptsStatistics attemtptsObj={statistics.attempts} />
      </Stack>
    </BannersWrapper>
  );
}
