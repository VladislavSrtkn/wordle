import CountdownContainer from './CountdownContainer';
import CustomButton from './CustomButton';
import ResultsFieldLayout from './ResultsFieldLayout';

export default function WinDetailsContainer({ attempts, results, closeHandler, isWin, puzzle }) {
  return (
    <div
      style={{
        margin: '40px auto',
        width: '80%',
        borderRadius: '0.5rem',
        padding: '1rem',
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      <CustomButton text={'X'} clickHandler={closeHandler} />
      <h3 style={{ textAlign: 'center' }}>WORDLE {attempts}/6</h3>
      <ResultsFieldLayout resultsArray={results} />
      {!isWin && <h3 style={{ textAlign: 'center' }}>Загаданное слово: {puzzle}</h3>}
      <CountdownContainer />
    </div>
  );
}
