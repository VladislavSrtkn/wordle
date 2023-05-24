import { Button } from 'react-bootstrap';

export default function KeyboardButton({ name, cssClass, onClick }) {
  const backspace = <i className='bi bi-backspace-fill'></i>;

  return (
    <Button
      variant='secondary'
      onClick={() => onClick(name)}
      className={`${cssClass} keyboard-btn`}
    >
      {name === 'backspace' ? backspace : name === 'enter' ? '↵' : name}
    </Button>
  );
}
