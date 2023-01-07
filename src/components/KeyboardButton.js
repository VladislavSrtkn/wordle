export default function KeyboardButton({ name, cssClass, handleClick }) {
  return (
    <button
      onClick={() => handleClick(name)}
      style={{
        backgroundColor: '#d6d5d5',
        margin: '0.25rem 0.125rem',
        borderRadius: '8px',
        border: 'none',
        height: '56px',
        flex: 1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
      className={cssClass}
    >
      {name === 'backSpace' ? '⌫' : name}
    </button>
  );
}
