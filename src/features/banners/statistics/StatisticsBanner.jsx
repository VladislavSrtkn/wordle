import { Col, Stack } from 'react-bootstrap';

import textData from '../language/textData';

import getStatisticsData from './getStatisticsData';
import countTotalAttempts from './countTotalAttempts';
import countWinRate from './countWinRate';
import countAverageAttempts from './countAverageAttempts';

import BannersWrapper from '../BannersWrapper';
import AttemptsChart from './AttemptsChart';
import StatisticsContentBox from './StatisticsContentBox';

export default function StatisticsBanner({ language, onHide }) {
  const statistics = getStatisticsData(language);
  const { attempts, gamesPlayed, gamesWon, winStreak, maxWinStreak } = statistics;

  const winRate = countWinRate(gamesWon, gamesPlayed);
  const attemptsTotal = countTotalAttempts(attempts);
  const attemptsAverage = countAverageAttempts(attemptsTotal, gamesPlayed);

  const { statistic, played, totalWins, winStreakNow, attemptsPerGame, winStreakMax } =
    textData.stats;

  return (
    <BannersWrapper onHide={onHide} title={statistic}>
      <Stack>
        <Col className='d-flex justify-content-around border-bottom py-3'>
          <StatisticsContentBox number={gamesPlayed} text={played} />
          <StatisticsContentBox number={`${winRate}%`} text={totalWins} />
        </Col>

        <Col className='d-flex justify-content-around border-bottom py-3 stats-second-box'>
          <StatisticsContentBox number={winStreak} text={winStreakNow} />
          <StatisticsContentBox number={attemptsAverage} text={attemptsPerGame} />
          <StatisticsContentBox number={maxWinStreak} text={winStreakMax} />
        </Col>

        <AttemptsChart attempts={attempts} />
      </Stack>
    </BannersWrapper>
  );
}
