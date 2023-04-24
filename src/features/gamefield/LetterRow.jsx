import { Row } from 'react-bootstrap';

import LetterContainer from './LetterContainer';

export default function LetterRow({ word }) {
  const input = word.map((letter, i) => (
    <LetterContainer key={i} letter={letter.value} cssClass={letter.status} />
  ));

  return <Row className='my-1 gap-1 letter-row'>{input}</Row>;
}
