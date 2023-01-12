export default function KeyboardButton({ name, cssClass, handleClick }) {
  return (
    <button
      onClick={() => handleClick(name)}
      style={{
        backgroundColor: '#d6d5d5',
        color: '#000',
        margin: '0.25rem 0.125rem',
        borderRadius: '8px',
        border: '2px solid #d6d5d5',
        height: '56px',
        flex: 1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: '0px',
      }}
      className={cssClass}
    >
      {name === 'backSpace' ? '⌫' : name}
    </button>
  );
}
