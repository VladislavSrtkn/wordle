import { Row } from 'react-bootstrap';

import KeyboardButton from './KeyboardButton';

export default function KeyboardRow({ data, onClick }) {
  const buttons = data.map((button) => (
    <KeyboardButton
      key={button.value}
      name={button.value}
      onClick={onClick}
      cssClass={button.status}
    />
  ));

  return <Row>{buttons}</Row>;
}
