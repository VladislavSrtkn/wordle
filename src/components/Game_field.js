import LetterRow from './LetterRow';

export default function GameField() {
  let table = [];

  for (let i = 0; i < 6; i++) {
    table.push(<LetterRow key={i} />);
  }

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>{table}</div>;
}
