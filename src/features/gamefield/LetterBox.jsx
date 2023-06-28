import { Col } from 'react-bootstrap';

import { useContext } from 'react';

import { ThemeContext } from '../theme/theme-context';

export default function LetterBox({ letter, statusClass }) {
  const theme = useContext(ThemeContext);
  const borderClass = theme + '-theme-border';
  const borderClassName = letter !== '' && statusClass === '' ? borderClass : '';

  return (
    <Col
      className={`${statusClass} ${borderClassName} letter-box d-flex justify-content-center align-items-center fw-bold text-uppercase `}
    >
      {letter}
    </Col>
  );
}
