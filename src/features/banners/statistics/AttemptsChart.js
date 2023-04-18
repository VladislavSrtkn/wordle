import getMaxAttemptsCount from './getMaxAttemptsCount';
import textData from '../language/textData';

export default function AttemptsChart({ attempts }) {
  const maxAttempts = getMaxAttemptsCount(attempts);

  const input = Object.entries(attempts).map(([attempts, count]) => {
    const rowWidth = 100 * (count / maxAttempts) + 18;
    const bgColor = count === 0 ? '#adadad' : '#5db40c';

    return (
      <li key={attempts} className='mb-1'>
        <div className='d-inline-block fw-bold mx-1 li-number'>{attempts}</div>
        <div
          className='p-1 pr-3 text-light d-inline-block'
          style={{ backgroundColor: bgColor, width: rowWidth + 'px' }}
        >
          {count}
        </div>
      </li>
    );
  });

  return (
    <>
      <h4 className='text-center text-uppercase py-3'>{textData.stats.attemptStat}</h4>
      <ul className='list-style-none'>{input}</ul>
    </>
  );
}
