import LetterRow from './LetterRow';

export default function GameField({ result }) {
  const table = [];

  for (let i = 0; i < result.length; i++) {
    table.push(<LetterRow key={i} word={result[i]} />);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        width: '80%',
        height: '100%',
        minHeight: '240px',
        maxHeight: '480px',
        fontSize: '1.8rem',
      }}
    >
      {table}
    </div>
  );
}
