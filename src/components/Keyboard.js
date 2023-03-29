import { Row } from 'react-bootstrap';

import KeyboardRow from './KeyboardRow';

export default function Keyboard({ onClick, keyboard }) {
  const keyboardRows = keyboard.map((row, i) => (
    <KeyboardRow key={i} symbolsArray={row} onClick={onClick} />
  ));

  return <Row className='justify-content-center py-4'>{keyboardRows}</Row>;
}
