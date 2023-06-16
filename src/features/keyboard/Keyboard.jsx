import { Col, Row } from 'react-bootstrap';

import KeyboardRow from './KeyboardRow';

export default function Keyboard({ onClick, keyboard }) {
  const rows = keyboard.map((row, i) => <KeyboardRow key={i} data={row} onClick={onClick} />);

  return (
    <Col xs='12' className='d-flex flex-wrap align-content-end flex-grow-0 py-3'>
      <Row className='flex-grow-1'>{rows}</Row>
    </Col>
  );
}
