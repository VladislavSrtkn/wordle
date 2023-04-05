import { Row } from 'react-bootstrap';

import KeyboardRow from './KeyboardRow';

export default function Keyboard({ onClick, keyboard }) {
  const input = keyboard.map((row, i) => <KeyboardRow key={i} symbols={row} onClick={onClick} />);

  return <Row className='justify-content-center py-4'>{input}</Row>;
}
