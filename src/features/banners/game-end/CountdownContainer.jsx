import { useEffect, useState } from 'react';

import textData from '../language/textData';
import makeTimerString from './makeTimerString';

export default function CountdownContainer() {
  const [timeNow, setTimeNow] = useState(() => new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTimeNow(() => new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const hoursToNewWord = 23 - timeNow.getHours();
  const minutesToNewWord = 59 - timeNow.getMinutes();
  const secondsToNewWord = 59 - timeNow.getSeconds();

  const timerString = makeTimerString(hoursToNewWord, minutesToNewWord, secondsToNewWord);

  return (
    <h4 className='mb-4'>
      {textData.end.nextWord} <br />
      {timerString}
    </h4>
  );
}
