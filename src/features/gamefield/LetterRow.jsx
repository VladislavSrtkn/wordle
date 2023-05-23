import { Row } from 'react-bootstrap';

import LetterBox from './LetterBox';

export default function LetterRow({ word }) {
  const letters = word.map((letter, i) => (
    <LetterBox key={i} letter={letter.value} cssClass={letter.status} />
  ));

  return <Row className='my-1 gap-1 flex-grow-1'>{letters}</Row>;
}
