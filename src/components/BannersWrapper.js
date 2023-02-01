import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../theme-context';
import { useContext } from 'react';

export default function BannersWrapper({ closeHandler, children }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: '100%',
        minWidth: '100%',
        backgroundColor: '#fff',
        zIndex: '99',
        position: 'absolute',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        ...theme,
      }}
    >
      <CloseIcon
        onClick={closeHandler}
        sx={{ color: '#b5b5b5', position: 'absolute', right: '20px', top: '10px' }}
      />
      {children}
    </div>
  );
}
