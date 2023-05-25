import { Col } from 'react-bootstrap';

import KeyboardRow from './KeyboardRow';

export default function Keyboard({ onClick, keyboard }) {
  const rows = keyboard.map((row, i) => <KeyboardRow key={i} data={row} onClick={onClick} />);

  return <Col className='d-flex flex-column justify-content-end flex-grow-0 py-3'>{rows}</Col>;
}
