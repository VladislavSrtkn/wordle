import { ThemeContext } from '../theme-context';
import { useContext } from 'react';

export default function Wrapper({ children }) {
  const windowHeight = document.documentElement.clientHeight + 'px';
  const theme = useContext(ThemeContext);

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
        ...theme,
      }}
    >
      {children}
    </div>
  );
}
