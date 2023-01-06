import KeyboardRow from './KeyboardRow';

export default function KeyboardRu({ handleClick }) {
  const symbolsArray1 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'];
  const symbolsArray2 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];
  const symbolsArray3 = ['backSpace', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ввод'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        paddingLeft: '0.25rem',
        paddingRight: '0.25rem',
      }}
    >
      <KeyboardRow symbolsArray={symbolsArray1} handleClick={handleClick} />
      <KeyboardRow symbolsArray={symbolsArray2} handleClick={handleClick} />
      <KeyboardRow symbolsArray={symbolsArray3} handleClick={handleClick} />
    </div>
  );
}
