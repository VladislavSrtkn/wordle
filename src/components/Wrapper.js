import CloseIcon from '@mui/icons-material/Close';

export default function Wrapper({ closeHandler, children }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        zIndex: '99',
        position: 'absolute',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      <CloseIcon
        onClick={closeHandler}
        sx={{ color: 'grey', position: 'absolute', right: '20px', top: '10px' }}
      />
      {children}
    </div>
  );
}
