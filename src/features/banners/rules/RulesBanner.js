import { Button, Stack } from 'react-bootstrap';

import textData from '../../language/textData';

import LetterContainer from '../../gamefield/LetterContainer';
import BannersWrapper from '../BannersWrapper';

export default function RulesBanner({ onHide }) {
  return (
    <BannersWrapper onHide={onHide} title={textData.gameRules}>
      <Stack className='no-transform'>
        <p>{textData.goal}</p>
        <p className='border-bottom pb-2'>
          {textData.formatString(
            textData.firstExample,
            <b>{textData.exampleHiddenWord}</b>,
            textData.firstTry
          )}
        </p>
        <div className='example-row mb-2'>
          <LetterContainer letter={textData.firstTry[0]} />
          <LetterContainer letter={textData.firstTry[1]} />
          <LetterContainer letter={textData.firstTry[2]} />
          <LetterContainer letter={textData.firstTry[3]} />
          <LetterContainer letter={textData.firstTry[4]} cssClass={'inPuzzle'} />
        </div>
        <p className='border-bottom pb-2'>
          {textData.formatString(textData.firstOutcome, <b>{textData.firstLetter}</b>)}
        </p>
        <p>
          {textData.formatString(
            textData.secondExample,
            textData.secondTry,
            <b>{textData.secondLetter}</b>,
            <b>{textData.thirdLetter}</b>
          )}
        </p>
        <div className='example-row mb-2'>
          <LetterContainer letter={textData.secondTry[0]} />
          <LetterContainer letter={textData.secondTry[1]} cssClass={'inPlace'} />
          <LetterContainer letter={textData.secondTry[2]} cssClass={'inPlace'} />
          <LetterContainer letter={textData.secondTry[3]} />
          <LetterContainer letter={textData.secondTry[4]} />
        </div>
        <p className='py-2 border-top'>{textData.thirdExample}</p>
        <div className='example-row mb-2'>
          <LetterContainer letter={textData.exampleHiddenWord[0]} cssClass={'inPlace'} />
          <LetterContainer letter={textData.exampleHiddenWord[1]} cssClass={'inPlace'} />
          <LetterContainer letter={textData.exampleHiddenWord[2]} cssClass={'inPlace'} />
          <LetterContainer letter={textData.exampleHiddenWord[3]} cssClass={'inPlace'} />
          <LetterContainer letter={textData.exampleHiddenWord[4]} cssClass={'inPlace'} />
        </div>
        <p className='py-2 border-top'>{textData.fourthExample}</p>
        <div className='example-row mb-2'>
          <LetterContainer letter={textData.thirdTry[0]} cssClass={'notInPuzzle'} />
          <LetterContainer letter={textData.thirdTry[1]} />
          <LetterContainer letter={textData.thirdTry[2]} />
          <LetterContainer letter={textData.thirdTry[3]} />
          <LetterContainer letter={textData.thirdTry[4]} />
        </div>
        <div className='border-top d-flex gap-2 align-items-center py-2'>
          <p>
            <b>{textData.dailyRule}</b>
          </p>
          <Button variant='success' onClick={onHide} className='text-white ms-4'>
            {textData.play}
          </Button>
        </div>
        <p className='border-top py-2'>
          <b>{textData.firstQuestion}</b>
        </p>
        <p>{textData.firstAnswer}</p>
        <p className='border-top py-2'>
          <b>{textData.secondQuestion}</b>
        </p>
        <p>{textData.secondAnswer}</p>
        <p className='border-top py-2'>
          <b>{textData.thirdQuestion}</b>
        </p>
        <p>{textData.thirdAnswer}</p>
        <p className='border-top py-2'>
          <b>{textData.aboutTitle}</b>
        </p>
        <p>
          {textData.formatString(
            textData.about,
            <a href='mailto:vladislav_srtkn@gmail.com' className='link-info'>
              email
            </a>,
            <a
              target='_blank'
              rel='noreferrer'
              className='link-info'
              href='https://github.com/VladislavSrtkn/wordle'
            >
              github
            </a>
          )}
        </p>
      </Stack>
    </BannersWrapper>
  );
}
