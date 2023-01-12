import { useEffect, useState } from 'react';

export default function CountdownContainer() {
  const [timeNow, setTimeNow] = useState(new Date());

  const hoursToNewWord =
    23 - timeNow.getHours() >= 10 ? 23 - timeNow.getHours() : '0' + (23 - timeNow.getHours());
  const minutesToNewWord =
    59 - timeNow.getMinutes() >= 10 ? 59 - timeNow.getMinutes() : '0' + (59 - timeNow.getMinutes());
  let secondsToNewWord =
    60 - timeNow.getSeconds() >= 10 ? 59 - timeNow.getSeconds() : '0' + (60 - timeNow.getSeconds());

  useEffect(() => {
    setInterval(() => setTimeNow(new Date()), 1000);
  }, []);
  return (
    <h4 style={{ textAlign: 'center', marginBottom: '3rem' }}>
      СДЕДУЮЩЕЕ СЛОВО ЧЕРЕЗ: <br></br>
      {hoursToNewWord}:{minutesToNewWord}:{secondsToNewWord}
    </h4>
  );
}
