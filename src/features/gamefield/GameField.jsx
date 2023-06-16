import { Col, Row } from 'react-bootstrap';

import LetterRow from './LetterRow';

export default function GameField({ data }) {
  const rows = data.map((word, i) => <LetterRow key={i} word={word} />);

  return (
    <Col xs='11' className='d-flex flex-wrap game-field flex-grow-1 m-auto'>
      <Row className='flex-grow-1'>{rows}</Row>
    </Col>
  );
}
