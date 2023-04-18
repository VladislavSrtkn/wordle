import { Button } from 'react-bootstrap';

import makeResultsEmojiLayout from './makeResultsEmojiLayout';

import textData from '../language/textData';

import CountdownContainer from './CountdownContainer';
import BannersWrapper from '../BannersWrapper';

export default function EndBanner({ attempts, results, onHide, isWin, puzzle, dayNumber }) {
  const countOfAttempts = isWin ? attempts : 'X';
  const slicedResults = results.slice(0, attempts);

  const layoutForShare = makeResultsEmojiLayout(slicedResults).join(`\n`);
  const emojiLayout = makeResultsEmojiLayout(slicedResults).map((string, i) => (
    <span key={i}>
      {string} <br />
    </span>
  ));

  const { endBannerHeader, hiddenWord, challenge, shareText, share } = textData.end;

  return (
    <BannersWrapper onHide={onHide} title={`${endBannerHeader} ${dayNumber} ${countOfAttempts}/6`}>
      <p>{emojiLayout}</p>

      {!isWin && (
        <h4 className='text-center py-3'>
          {hiddenWord} {puzzle}
        </h4>
      )}

      <CountdownContainer />

      <h4 className='text-center'>{challenge}</h4>

      <div className='text-center py-3'>
        <Button
          onClick={async () => {
            if (navigator.share !== undefined) {
              navigator.share({
                title: document.title,
                url: 'https://vladislavsrtkn.github.io/wordle/',
                text: textData.formatString(shareText, dayNumber, attempts, layoutForShare),
              });
            }
          }}
        >
          <i className='bi bi-share-fill me-2'></i>
          {share}
        </Button>
      </div>
    </BannersWrapper>
  );
}
