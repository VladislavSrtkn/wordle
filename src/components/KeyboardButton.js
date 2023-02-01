export default function KeyboardButton({ name, cssClass, handleClick }) {
  return (
    <button
      onClick={() => handleClick(name)}
      style={{
        backgroundColor: '#e7e7e7',
        color: '#000',
        margin: '0.25rem 0.125rem',
        borderRadius: '8px',
        border: '2px solid #e7e7e7',
        height: '56px',
        flex: 1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: '0px',
      }}
      className={cssClass}
    >
      {name === 'backSpace' ? '⌫' : name === 'enter' ? '↵' : name}
    </button>
  );
}
