import { Button, Stack } from 'react-bootstrap';

import textData from '../language/textData';

import LetterContainer from '../../gamefield/LetterContainer';
import BannersWrapper from '../BannersWrapper';

export default function RulesBanner({ onHide }) {
  const {
    gameRules,
    goal,
    firstExample,
    exampleHiddenWord,
    firstTry,
    firstOutcome,
    firstLetter,
    secondExample,
    secondTry,
    secondLetter,
    thirdLetter,
    thirdExample,
    fourthExample,
    thirdTry,
    dailyRule,
    play,
    firstQuestion,
    firstAnswer,
    secondQuestion,
    secondAnswer,
    thirdQuestion,
    thirdAnswer,
    aboutTitle,
    about,
  } = textData.rules;

  return (
    <BannersWrapper onHide={onHide} title={gameRules}>
      <Stack className='no-transform'>
        <p>{goal}</p>
        <p className='border-bottom pb-2'>
          {textData.formatString(firstExample, <b>{exampleHiddenWord}</b>, firstTry)}
        </p>
        <div className='example-row mb-2'>
          <LetterContainer letter={firstTry[0]} />
          <LetterContainer letter={firstTry[1]} />
          <LetterContainer letter={firstTry[2]} />
          <LetterContainer letter={firstTry[3]} />
          <LetterContainer letter={firstTry[4]} cssClass={'inPuzzle'} />
        </div>
        <p className='border-bottom pb-2'>
          {textData.formatString(firstOutcome, <b>{firstLetter}</b>)}
        </p>
        <p>
          {textData.formatString(
            secondExample,
            secondTry,
            <b>{secondLetter}</b>,
            <b>{thirdLetter}</b>
          )}
        </p>
        <div className='example-row mb-2'>
          <LetterContainer letter={secondTry[0]} />
          <LetterContainer letter={secondTry[1]} cssClass={'inPlace'} />
          <LetterContainer letter={secondTry[2]} cssClass={'inPlace'} />
          <LetterContainer letter={secondTry[3]} />
          <LetterContainer letter={secondTry[4]} />
        </div>
        <p className='py-2 border-top'>{thirdExample}</p>
        <div className='example-row mb-2'>
          <LetterContainer letter={exampleHiddenWord[0]} cssClass={'inPlace'} />
          <LetterContainer letter={exampleHiddenWord[1]} cssClass={'inPlace'} />
          <LetterContainer letter={exampleHiddenWord[2]} cssClass={'inPlace'} />
          <LetterContainer letter={exampleHiddenWord[3]} cssClass={'inPlace'} />
          <LetterContainer letter={exampleHiddenWord[4]} cssClass={'inPlace'} />
        </div>
        <p className='py-2 border-top'>{fourthExample}</p>
        <div className='example-row mb-2'>
          <LetterContainer letter={thirdTry[0]} cssClass={'notInPuzzle'} />
          <LetterContainer letter={thirdTry[1]} />
          <LetterContainer letter={thirdTry[2]} />
          <LetterContainer letter={thirdTry[3]} />
          <LetterContainer letter={thirdTry[4]} />
        </div>
        <div className='border-top d-flex gap-2 align-items-center py-2'>
          <p>
            <b>{dailyRule}</b>
          </p>
          <Button variant='success' onClick={onHide} className='text-white ms-4'>
            {play}
          </Button>
        </div>
        <p className='border-top py-2'>
          <b>{firstQuestion}</b>
        </p>
        <p>{firstAnswer}</p>
        <p className='border-top py-2'>
          <b>{secondQuestion}</b>
        </p>
        <p>{secondAnswer}</p>
        <p className='border-top py-2'>
          <b>{thirdQuestion}</b>
        </p>
        <p>{thirdAnswer}</p>
        <p className='border-top py-2'>
          <b>{aboutTitle}</b>
        </p>
        <p>
          {textData.formatString(
            about,
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
