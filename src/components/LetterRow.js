import LetterContainer from './LetterContainer';

export default function LetterRow({ word }) {
  const row = [];

  for (let i = 0; i < word.length; i++) {
    row.push(<LetterContainer key={i} letter={word[i].value} cssClass={word[i].status} />);
  }

  return (
    <div style={{ display: 'flex', gap: '0.3rem', width: '100%', height: '100%', flex: 1 }}>
      {row}
    </div>
  );
}
