import ResultsFieldSquare from './ResultsFieldSquare';

export default function ResultsFieldRow({ squaresArray }) {
  const row = [];

  for (let i = 0; i < squaresArray.length; i++) {
    row.push(<ResultsFieldSquare key={i} cssClass={squaresArray[i].status} />);
  }

  return <div style={{ display: 'flex', gap: '0.3rem', width: '100%' }}>{row}</div>;
}
