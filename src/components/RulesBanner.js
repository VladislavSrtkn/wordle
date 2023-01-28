import LetterContainer from './LetterContainer';
import BannersWrapper from './BannersWrapper';

export default function RulesBanner({ closeHandler }) {
  return (
    <BannersWrapper closeHandler={closeHandler}>
      <h3 style={{ textAlign: 'center' }}>ПРАВИЛА ИГРЫ</h3>
      <div style={{ padding: '0.8rem' }}>
        <p>Угадайте загаданное слово дня в игре Вордли (Wordle) с шести попыток.</p>
        <p style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: '1rem' }}>
          После каждой попытки цвет букв будет меняться, чтобы показать, какие буквы есть в
          загаданном слове! Например, мы пытаемся отгадать слово <b>ПИРАТ</b> и вводим слово Схема:
        </p>
        <div style={{ height: '2.2rem', width: '15rem', display: 'flex', gap: '0.3rem' }}>
          <LetterContainer letter={'С'} />
          <LetterContainer letter={'Х'} />
          <LetterContainer letter={'Е'} />
          <LetterContainer letter={'М'} />
          <LetterContainer letter={'А'} cssClass={'rules-inPuzzle'} />
        </div>
        <p style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: '1rem' }}>
          Буква <b>А</b> есть в загаданном слове, но стоит в другом месте.
        </p>
        <p>
          Затем ввели слово Вирус. Буквы <b>И</b> и <b>Р</b> есть в загаданном слове и стоят на
          правильных местах.
        </p>
        <div style={{ height: '2.2rem', width: '15rem', display: 'flex', gap: '0.3rem' }}>
          <LetterContainer letter={'В'} />
          <LetterContainer letter={'И'} cssClass={'rules-inPlace'} />
          <LetterContainer letter={'Р'} cssClass={'rules-inPlace'} />
          <LetterContainer letter={'У'} />
          <LetterContainer letter={'С'} />
        </div>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          Если слово угадано правильно, то все буквы будут выделены!
        </p>
        <div style={{ height: '2.2rem', width: '15rem', display: 'flex', gap: '0.3rem' }}>
          <LetterContainer letter={'П'} cssClass={'rules-inPlace'} />
          <LetterContainer letter={'И'} cssClass={'rules-inPlace'} />
          <LetterContainer letter={'Р'} cssClass={'rules-inPlace'} />
          <LetterContainer letter={'А'} cssClass={'rules-inPlace'} />
          <LetterContainer letter={'Т'} cssClass={'rules-inPlace'} />
        </div>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          Если буквы нет в загаданном слове, то она выделяется серым.
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
          <LetterContainer letter={'М'} cssClass={'rules-notInPuzzle'} />
          <LetterContainer letter={'И'} />
          <LetterContainer letter={'Р'} />
          <LetterContainer letter={'А'} />
          <LetterContainer letter={'Ж'} />
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
            <b>Каждый день загадывается новое слово!</b>
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
            ИГРАТЬ!
          </button>
        </div>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          <b>Какие слова могут быть загаданы?</b>
        </p>
        <p>В основном загадываются существительные в единственном числе.</p>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          <b>Могут ли в загадываемом слове быть одинаковые буквы?</b>
        </p>
        <p>Да, в загаданном слове могут быть одинаковые буквы.</p>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          <b>Есть ли буква Ё в игре?</b>
        </p>
        <p>По правилам кроссвордов буква Ё в словах заменена на E!</p>
        <p style={{ borderTop: '1px solid #d7d7d7', paddingTop: '1rem' }}>
          <b>Все отгадывают одинаковое слово?</b>
        </p>
        <p>Да, каждый день слово для всех одинаковое.</p>
      </div>
    </BannersWrapper>
  );
}
