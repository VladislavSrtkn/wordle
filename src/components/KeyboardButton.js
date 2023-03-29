import { Button } from 'react-bootstrap';

export default function KeyboardButton({ name, cssClass, onClick }) {
  return (
    <Button
      variant='secondary'
      onClick={() => onClick(name)}
      className={`${cssClass} keyboard-btn`}
    >
      {name === 'backSpace' ? '⌫' : name === 'enter' ? '↵' : name}
    </Button>
  );
}
