export default function LetterContainer({ letter, cssClass }) {
  return (
    <div
      style={{
        border: '2px solid #bebebe',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      }}
      className={cssClass}
    >
      {letter}
    </div>
  );
}
