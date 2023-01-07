import KeyboardButton from './KeyboardButton';

export default function KeyboardRow({ symbolsArray, handleClick }) {
  let row = [];

  for (let i = 0; i < symbolsArray.length; i++) {
    row.push(
      <KeyboardButton
        key={i}
        name={symbolsArray[i].value}
        handleClick={handleClick}
        cssClass={symbolsArray[i].status}
      />
    );
  }

  return <div style={{ display: 'flex', justifyContent: 'space-between' }}>{row}</div>;
}
