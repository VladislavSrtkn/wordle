import { Row } from 'react-bootstrap';

import KeyboardButton from './KeyboardButton';

export default function KeyboardRow({ symbolsArray, onClick }) {
  const input = symbolsArray.map((symb) => (
    <KeyboardButton key={symb.value} name={symb.value} onClick={onClick} cssClass={symb.status} />
  ));

  return <Row>{input}</Row>;
}
