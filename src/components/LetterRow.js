import LetterContainer from './LetterContainer';

export default function LetterRow({ word }) {
  let row = [];

  for (let i = 0; i < word.length; i++) {
    row.push(<LetterContainer key={i} letter={word[i].value} />);
  }

  return <div style={{ display: 'flex', gap: '0.3rem', width: '100%', height: '100%' }}>{row}</div>;
}
