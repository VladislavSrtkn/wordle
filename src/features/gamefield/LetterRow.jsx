import { Col } from 'react-bootstrap';

import LetterBox from './LetterBox';

export default function LetterRow({ word, index }) {
  const letters = word.map((letter, i) => {
    const key = letter.value + i;
    return <LetterBox key={key} letter={letter.value} statusClass={letter.status} />;
  });

  return (
    <Col xs={12} data-gamefield-row={index} className='d-flex my-1 gap-1 flex-grow-1 flex-nowrap'>
      {letters}
    </Col>
  );
}
