export default function KeyboardButton({ name, handleClick }) {
  return (
    <button
      onClick={() => handleClick(name)}
      style={{
        backgroundColor: '#d6d5d5',
        margin: '0.25rem 0.125rem',
        borderRadius: '8px',
        height: '56px',
        padding: '0.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
    >
      {name === 'backSpace' ? '⌫' : name}
    </button>
  );
}
