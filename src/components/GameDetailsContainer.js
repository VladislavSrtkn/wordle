import CountdownContainer from './CountdownContainer';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import makeResultsEmojiLayout from '../makeResultsEmojiLayout';
import { ThemeContext } from '../theme-context';
import { useContext } from 'react';
import textData from '../textData';

export default function GameDetailsContainer({
  attempts,
  results,
  closeHandler,
  isWin,
  puzzle,
  dayNum,
}) {
  const emojiLayout = makeResultsEmojiLayout(results).map((str, index) => (
    <span key={index}>
      {str} <br />
    </span>
  ));

  const emojiString = makeResultsEmojiLayout(results).join(`\n`);
  const countOfAttempts = isWin ? attempts : 'X';

  const theme = useContext(ThemeContext);

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
        ...theme,
      }}
    >
      <CloseIcon
        onClick={closeHandler}
        sx={{ color: '#b5b5b5', position: 'absolute', right: '20px', top: '10px' }}
      />
      <h3 style={{ textAlign: 'center' }}>
        {textData.endBannerHeader}
        {dayNum} {countOfAttempts}/6
      </h3>

      <p style={{ textAlign: 'left' }}>{emojiLayout}</p>

      {!isWin && (
        <h3 style={{ textAlign: 'center' }}>
          {textData.hiddenWord} {puzzle}
        </h3>
      )}

      <CountdownContainer />

      <h3 style={{ textAlign: 'center' }}>
        <b>{textData.challenge}</b>
      </h3>

      <button
        onClick={async () => {
          if (navigator.share !== undefined) {
            navigator.share({
              title: document.title,
              url: 'https://vladislavsrtkn.github.io/wordle/',
              text: textData.formatString(textData.shareText, dayNum, attempts, emojiString),
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
        {textData.share}
      </button>
    </div>
  );
}
