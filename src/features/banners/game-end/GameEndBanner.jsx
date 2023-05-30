import { Button, Col } from 'react-bootstrap';

import { COUNT_OF_TRIES } from '../../../config';

import makeResultsEmojiLayout from './makeResultsEmojiLayout';

import textData from '../language/textData';

import CountdownContainer from './CountdownContainer';
import BannersWrapper from '../BannersWrapper';

export default function GameEndBanner({ attempts, results, onHide, isWin, puzzle, dayNumber }) {
  const countOfAttempts = isWin ? attempts : 'X';
  const slicedResults = results.slice(0, attempts);

  const { endBannerHeader, hiddenWord, challenge, shareText, share } = textData.end;

  const title = `${endBannerHeader} ${dayNumber} ${countOfAttempts}/${COUNT_OF_TRIES}`;

  const layoutForShare = makeResultsEmojiLayout(slicedResults).join(`\n`);
  const emojiLayout = makeResultsEmojiLayout(slicedResults).map((row, i) => (
    <span key={i} className='d-block'>
      {row}
    </span>
  ));

  async function handleShare() {
    if (navigator.share !== undefined) {
      navigator.share({
        title: document.title,
        url: 'https://vladislavsrtkn.github.io/wordle/',
        text: textData.formatString(shareText, dayNumber, attempts, layoutForShare),
      });
    }
  }

  return (
    <BannersWrapper onHide={onHide} title={title}>
      <section className='mb-3'>{emojiLayout}</section>

      <Col className='text-center'>
        {!isWin && (
          <h4 className='py-3'>
            {hiddenWord} {puzzle}
          </h4>
        )}

        <CountdownContainer />

        <h4>{challenge}</h4>

        <Button className='my-3' onClick={handleShare}>
          <i className='bi bi-share-fill me-2' />
          {share}
        </Button>
      </Col>
    </BannersWrapper>
  );
}
