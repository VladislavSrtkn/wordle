import { Stack } from 'react-bootstrap';

import textData from '../textData';

import getStatisticsData from '../getStatisticsData';
import countTotalAttempts from '../countTotalAttempts';
import countWinRate from '../countWinRate';
import countAverageAttempts from '../countAverageAttempts';

import BannersWrapper from './BannersWrapper';
import AttemptsChart from './AttemptsChart';

export default function StatisticsBanner({ language, onHide }) {
  const statistics = getStatisticsData(language);
  const { attempts, gamesPlayed, gamesWon, winStreak, maxWinStreak } = statistics;

  const winRate = countWinRate(gamesWon, gamesPlayed);
  const attemptsTotal = countTotalAttempts(attempts);
  const attemptsAverage = countAverageAttempts(attemptsTotal, gamesPlayed);

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
            <span className='fs-2'>{attemptsAverage}</span>
            <br />
            <span className='small-fs'>{textData.attemptsAverage}</span>
          </div>
          <div className='text-center'>
            <span className='fs-2'>{maxWinStreak}</span>
            <br />
            <span className='small-fs'>{textData.winStreakMax}</span>
          </div>
        </div>
        <AttemptsChart attempts={attempts} />
      </Stack>
    </BannersWrapper>
  );
}
