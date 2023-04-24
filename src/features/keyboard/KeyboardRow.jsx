import { Row } from 'react-bootstrap';

import KeyboardButton from './KeyboardButton';

export default function KeyboardRow({ symbols, onClick }) {
  const input = symbols.map((symb) => (
    <KeyboardButton key={symb.value} name={symb.value} onClick={onClick} cssClass={symb.status} />
  ));

  return <Row className='keyboard-row'>{input}</Row>;
}
