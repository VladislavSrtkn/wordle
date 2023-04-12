import { Button, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';

import { ThemeContext } from '../../theme/theme-context';
import { useContext } from 'react';

import makeResultsEmojiLayout from './makeResultsEmojiLayout';

import textData from '../../language/textData';

import CountdownContainer from './CountdownContainer';

export default function EndBanner({ attempts, results, onHide, isWin, puzzle, dayNumber }) {
  const countOfAttempts = isWin ? attempts : 'X';
  const slicedResults = results.slice(0, attempts);

  const layoutForShare = makeResultsEmojiLayout(slicedResults).join(`\n`);
  const emojiLayout = makeResultsEmojiLayout(slicedResults).map((string, i) => (
    <span key={i}>
      {string} <br />
    </span>
  ));

  const theme = useContext(ThemeContext);

  return (
    <Modal show={true} onHide={onHide}>
      <ModalHeader closeButton style={{ ...theme }}>
        <ModalTitle>
          {textData.endBannerHeader}
          {dayNumber} {countOfAttempts}/6
        </ModalTitle>
      </ModalHeader>
      <ModalBody style={{ ...theme }}>
        <p>{emojiLayout}</p>

        {!isWin && (
          <h4 className='text-center py-3'>
            {textData.hiddenWord} {puzzle}
          </h4>
        )}

        <CountdownContainer />

        <h4 className='text-center'>{textData.challenge}</h4>

        <div className='text-center py-3'>
          <Button
            onClick={async () => {
              if (navigator.share !== undefined) {
                navigator.share({
                  title: document.title,
                  url: 'https://vladislavsrtkn.github.io/wordle/',
                  text: textData.formatString(
                    textData.shareText,
                    dayNumber,
                    attempts,
                    layoutForShare
                  ),
                });
              }
            }}
          >
            <i className='bi bi-share-fill me-2'></i>
            {textData.share}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
}
