import LetterContainer from './LetterContainer';
import BannersWrapper from './BannersWrapper';
import textData from '../textData';

export default function RulesBanner({ closeHandler }) {
  return (
    <BannersWrapper closeHandler={closeHandler}>
      <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>{textData.gameRules}</h3>
      <div style={{ padding: '0.8rem' }}>
        <p>{textData.goal}</p>
        <p style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: '1rem' }}>
          {textData.formatString(
            textData.firstExample,
            <b>{textData.exampleHiddenWord}</b>,
            textData.firstTry
          )}
        </p>
        <div style={{ height: '2.2rem', width: '15rem', display: 'flex', gap: '0.3rem' }}>
          <LetterContainer letter={textData.firstTry[0]} />
          <LetterContainer letter={textData.firstTry[1]} />
          <LetterContainer letter={textData.firstTry[2]} />
          <LetterContainer letter={textData.firstTry[3]} />
          <LetterContainer letter={textData.firstTry[4]} cssClass={'rules-inPuzzle'} />
        </div>
        <p style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: '1rem' }}>
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
        <div style={{ height: '2.2rem', width: '15rem', display: 'flex', gap: '0.3rem' }}>
          <LetterContainer letter={textData.secondTry[0]} />
          <LetterContainer letter={textData.secondTry[1]} cssClass={'rules-inPlace'} />
          <LetterContainer letter={textData.secondTry[2]} cssClass={'rules-inPlace'} />
          <LetterContainer letter={textData.secondTry[3]} />
          <LetterContainer letter={textData.secondTry[4]} />
        </div>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          {textData.thirdExample}
        </p>
        <div style={{ height: '2.2rem', width: '15rem', display: 'flex', gap: '0.3rem' }}>
          <LetterContainer letter={textData.exampleHiddenWord[0]} cssClass={'rules-inPlace'} />
          <LetterContainer letter={textData.exampleHiddenWord[1]} cssClass={'rules-inPlace'} />
          <LetterContainer letter={textData.exampleHiddenWord[2]} cssClass={'rules-inPlace'} />
          <LetterContainer letter={textData.exampleHiddenWord[3]} cssClass={'rules-inPlace'} />
          <LetterContainer letter={textData.exampleHiddenWord[4]} cssClass={'rules-inPlace'} />
        </div>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          {textData.fourthExample}
        </p>
        <div
          style={{
            height: '2.2rem',
            width: '15rem',
            display: 'flex',
            gap: '0.3rem',
            marginBottom: '1rem',
          }}
        >
          <LetterContainer letter={textData.thirdTry[0]} cssClass={'rules-notInPuzzle'} />
          <LetterContainer letter={textData.thirdTry[1]} />
          <LetterContainer letter={textData.thirdTry[2]} />
          <LetterContainer letter={textData.thirdTry[3]} />
          <LetterContainer letter={textData.thirdTry[4]} />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            borderTop: '1px solid #d7d7d7',
          }}
        >
          <p>
            <b>{textData.dailyRule}</b>
          </p>
          <button
            onClick={closeHandler}
            style={{
              backgroundColor: 'green',
              fontWeight: 'bold',
              color: '#fff',
              border: 'none',
              borderRadius: '0.3rem',
              height: 'fit-content',
              paddingTop: '0.3rem',
              paddingBottom: '0.3rem',
              margin: '1rem',
            }}
          >
            {textData.play}
          </button>
        </div>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          <b>{textData.firstQuestion}</b>
        </p>
        <p>{textData.firstAnswer}</p>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          <b>{textData.secondQuestion}</b>
        </p>
        <p>{textData.secondAnswer}</p>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          <b>{textData.thirdQuestion}</b>
        </p>
        <p>{textData.thirdAnswer}</p>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          <b>{textData.aboutTitle}</b>
        </p>
        <p>
          {textData.formatString(
            textData.about,
            <a href='mailto:vladislav_srtkn@gmail.com'> email</a>,
            <a target='_blank' href='https://github.com/VladislavSrtkn/wordle'>
              github
            </a>
          )}
        </p>
      </div>
    </BannersWrapper>
  );
}
