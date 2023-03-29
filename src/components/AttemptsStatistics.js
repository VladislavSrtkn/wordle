import getMaxAttemptsCount from '../getMaxAttemptsCount';
import textData from '../textData';

export default function AttemptsStatistics({ attemtptsObj }) {
  const maxAttempts = getMaxAttemptsCount(attemtptsObj);

  const input = Object.entries(attemtptsObj).map(([attempts, count]) => {
    const rowWidth = 100 * (count / maxAttempts) || 15;
    const bgColor = count !== 0 ? 'rgb(17, 157, 4)' : 'rgb(173, 173, 173)';

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
      <h4 className='text-center text-uppercase py-3'>{textData.attemptStat}</h4>
      <ul className='list-style-none'>{input}</ul>
    </>
  );
}
