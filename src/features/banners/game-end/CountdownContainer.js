import { useEffect, useState } from 'react';

import textData from '../../language/textData';

export default function CountdownContainer() {
  const [timeNow, setTimeNow] = useState(() => new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTimeNow(() => new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const hoursToNewWord =
    23 - timeNow.getHours() >= 10 ? 23 - timeNow.getHours() : '0' + (23 - timeNow.getHours());
  const minutesToNewWord =
    59 - timeNow.getMinutes() >= 10 ? 59 - timeNow.getMinutes() : '0' + (59 - timeNow.getMinutes());
  const secondsToNewWord =
    60 - timeNow.getSeconds() >= 10 ? 59 - timeNow.getSeconds() : '0' + (60 - timeNow.getSeconds());

  return (
    <h4 className='text-center mb-4'>
      {textData.nextWord} <br></br>
      {hoursToNewWord}:{minutesToNewWord}:{secondsToNewWord}
    </h4>
  );
}
