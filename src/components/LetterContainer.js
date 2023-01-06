export default function LetterContainer({ letter }) {
  return (
    <div
      style={{
        border: '2px solid grey',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      }}
    >
      {letter}
    </div>
  );
}
