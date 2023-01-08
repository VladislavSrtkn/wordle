import KeyboardRow from './KeyboardRow';

export default function Keyboard({ handleClick, keyboard }) {
  const keyboardRows = keyboard.map((row, index) => (
    <KeyboardRow key={index} symbolsArray={row} handleClick={handleClick} />
  ));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '96%',
        gap: '0.3rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        paddingLeft: '0.25rem',
        paddingRight: '0.25rem',
      }}
    >
      {keyboardRows}
    </div>
  );
}
