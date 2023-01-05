import LetterContainer from './LetterContainer';

export default function LetterRow() {
  let row = [];

  for (let i = 0; i < 6; i++) {
    row.push(<LetterContainer key={i} />);
  }

  return <div style={{ display: 'flex', gap: '0.3rem' }}>{row}</div>;
}
