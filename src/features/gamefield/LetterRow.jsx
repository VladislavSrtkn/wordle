import { Col } from 'react-bootstrap';

import LetterBox from './LetterBox';

export default function LetterRow({ word }) {
  const letters = word.map((letter, i) => (
    <LetterBox key={i} letter={letter.value} statusClass={letter.status} />
  ));

  return <Col className='d-flex my-1 gap-1 flex-grow-1 flex-nowrap col-12'>{letters}</Col>;
}
