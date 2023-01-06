import LetterRow from './LetterRow';

export default function GameField({ result }) {
  let table = [];

  for (let i = 0; i < result.length; i++) {
    table.push(<LetterRow key={i} word={result[i]} />);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        width: '100%',
        height: '100%',
        minHeight: '240px',
      }}
    >
      {table}
    </div>
  );
}