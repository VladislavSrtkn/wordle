export default function LetterContainer({ letter, cssClass }) {
  return (
    <div
      style={{
        border: '2px solid #bebebe',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        minHeight: '37px',
      }}
      className={cssClass}
    >
      {letter}
    </div>
  );
}
