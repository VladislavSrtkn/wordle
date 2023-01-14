import getMaxAttemptsCount from '../getMaxAttemptsCount';

export default function AttemptsStatistics({ attemtptsObj }) {
  const attemptsList = [];
  const maxAttempts = getMaxAttemptsCount(attemtptsObj);

  for (const key in attemtptsObj) {
    const attempts = key;
    const count = attemtptsObj[key];
    const rowWidth = 100 * (count / maxAttempts) || 15;
    const bgColor = count !== 0 ? 'rgb(17, 157, 4)' : 'rgb(173, 173, 173)';

    attemptsList.push(
      <li key={attempts} style={{ marginBottom: '0.3rem' }}>
        <div style={{ display: 'inline-block', width: '15px', fontWeight: 'bold' }}>{attempts}</div>
        <div
          style={{
            backgroundColor: bgColor,
            display: 'inline-block',
            width: rowWidth + 'px',
            color: '#fff',
            padding: '0.2rem',
          }}
        >
          {count}
        </div>
      </li>
    );
  }

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>РАСПРЕДЕЛЕНИЕ ПОПЫТОК</h3>
      <ul style={{ listStyle: 'none' }}>{attemptsList}</ul>
    </div>
  );
}
