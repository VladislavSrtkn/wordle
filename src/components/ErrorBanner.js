export default function ErrorBanner({ text }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '1rem',
        margin: 'auto',
        width: '80%',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '10px',
        padding: '1rem',
        fontWeight: 'bold',
        minHeight: '60px',
        zIndex: 2,
      }}
    >
      {text}
    </div>
  );
}
