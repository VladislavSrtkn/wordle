export default function Wrapper({ children }) {
  const windowHeight = document.documentElement.clientHeight + 'px';

  return (
    <div
      style={{
        margin: 'auto',
        maxWidth: '28rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: windowHeight,
        position: 'relative',
        backgroundColor: '#fff',
      }}
    >
      {children}
    </div>
  );
}
