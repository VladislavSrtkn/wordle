import CountdownContainer from './CountdownContainer';
import CustomButton from './CustomButton';
import ShareIcon from '@mui/icons-material/Share';
import ResultsFieldLayout from './ResultsFieldLayout';

export default function WinDetailsContainer({
  attempts,
  results,
  closeHandler,
  isWin,
  puzzle,
  dayNum,
}) {
  return (
    <div
      style={{
        margin: '40px auto',
        width: '80%',
        borderRadius: '0.5rem',
        padding: '1rem',
        backgroundColor: 'white',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <CustomButton text={'X'} clickHandler={closeHandler} />
      <h3 style={{ textAlign: 'center' }}>
        WORDLE ДЕНЬ #{dayNum} {attempts}/6
      </h3>
      <ResultsFieldLayout resultsArray={results} />
      {!isWin && <h3 style={{ textAlign: 'center' }}>Загаданное слово: {puzzle}</h3>}
      <CountdownContainer />
      <h3 style={{ textAlign: 'center' }}>
        <b>Бросьте вызов друзьям!</b>
      </h3>
      <button
        onClick={async () => {
          if (navigator.share !== undefined) {
            navigator.share({
              title: document.title,
              url: 'https://vladislavsrtkn.github.io/wordle/',
              text: `Игра Wodrle День #${dayNum} ${attempts}/6 \n#вордли \nОтгадайте слово на \nhttps://vladislavsrtkn.github.io/wordle/`,
            });
          }
        }}
        style={{
          width: '60%',
          border: 'none',
          color: '#fff',
          background: '#417bff',
          padding: '0.5rem 0.2rem',
          borderRadius: '7px',
          textAlign: 'start',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          display: 'flex',
          margin: 'auto',
        }}
      >
        <ShareIcon sx={{ marginRight: '0.5rem', marginLeft: '0.5rem', fontSize: '1.1.rem' }} />
        Поделиться
      </button>
    </div>
  );
}
