import ResultsFieldRow from './ResultsFieldRow';

export default function ResultsFieldLayout({ resultsArray }) {
  const table = [];

  for (let i = 0; i < resultsArray.length; i++) {
    table.push(<ResultsFieldRow key={i} squaresArray={resultsArray[i]} />);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem 0rem',
        gap: '0.3rem',
        borderBottom: '1px solid lightgrey',
      }}
    >
      {table}
    </div>
  );
}
