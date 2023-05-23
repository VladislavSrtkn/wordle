import { Button, Stack } from 'react-bootstrap';

import textData from '../language/textData';

import BannersWrapper from '../BannersWrapper';
import ExampleWordRow from './ExampleWordRow';

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

  const stylesBorder = 'border-top py-2';
  const stylesBold = 'fw-semibold';

  const EXAMPLE_WORDS = [
    { word: firstTry, styles: ['', '', '', '', 'inPuzzle'] },
    { word: secondTry, styles: ['', 'inPlace', 'inPlace', '', ''] },
    {
      word: exampleHiddenWord,
      styles: ['notInPuzzle', '', '', '', ''],
    },
    {
      word: thirdTry,
      styles: ['inPlace', 'inPlace', 'inPlace', 'inPlace', 'inPlace'],
    },
  ];

  return (
    <BannersWrapper onHide={onHide} title={gameRules}>
      <Stack className='no-transform'>
        <p>{goal}</p>
        <p>{textData.formatString(firstExample, <b>{exampleHiddenWord}</b>)}</p>

        <ExampleWordRow data={EXAMPLE_WORDS[0]} />

        <p>{textData.formatString(firstOutcome, <b>{firstLetter}</b>)}</p>
        <p className={stylesBorder}>
          {textData.formatString(
            secondExample,
            secondTry,
            <b>{secondLetter}</b>,
            <b>{thirdLetter}</b>
          )}
        </p>

        <ExampleWordRow data={EXAMPLE_WORDS[1]} />

        <p className={stylesBorder}>{thirdExample}</p>

        <ExampleWordRow data={EXAMPLE_WORDS[2]} />

        <p className={stylesBorder}>{fourthExample}</p>

        <ExampleWordRow data={EXAMPLE_WORDS[3]} />

        <div className={`${stylesBorder} d-flex gap-2 align-items-center`}>
          <p className={stylesBold}>{dailyRule}</p>
          <Button variant='success' onClick={onHide} className='text-white ms-4'>
            {play}
          </Button>
        </div>
        <p className={`${stylesBorder} ${stylesBold}`}>{firstQuestion}</p>
        <p>{firstAnswer}</p>
        <p className={`${stylesBorder} ${stylesBold}`}>{secondQuestion}</p>
        <p>{secondAnswer}</p>
        <p className={`${stylesBorder} ${stylesBold}`}>{thirdQuestion}</p>
        <p>{thirdAnswer}</p>
        <p className={`${stylesBorder} ${stylesBold}`}>{aboutTitle}</p>
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
