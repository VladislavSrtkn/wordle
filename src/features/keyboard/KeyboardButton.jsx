import { Button } from 'react-bootstrap';

export default function KeyboardButton({ name, cssClass, onClick }) {
  const backspace = <i className='bi bi-backspace-fill'></i>;

  return (
    <Button
      variant='secondary'
      onClick={() => onClick(name)}
      className={`${cssClass} keyboard-btn p-0 border-0 fw-bold text-uppercase`}
    >
      {name === 'backspace' ? backspace : name === 'enter' ? '↵' : name}
    </Button>
  );
}
