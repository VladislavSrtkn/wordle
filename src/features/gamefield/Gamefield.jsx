import { Col } from 'react-bootstrap';

import LetterRow from './LetterRow';

export default function GameField({ data }) {
  const rows = data.map((word, i) => <LetterRow key={i} word={word} />);

  return <Col className='d-flex flex-column flex-grow-1 game-field'>{rows}</Col>;
}
