import { Col } from 'react-bootstrap';

import { useEffect, useState, useContext } from 'react';

import { ThemeContext } from '../theme/theme-context';

export default function LetterBox({ letter, statusClass }) {
  const [statusClassName, setStatusClassName] = useState(null);

  // Update CSS class to display animation correctly on re-render
  useEffect(() => {
    setStatusClassName(null);
    let timerID = setTimeout(() => setStatusClassName(statusClass), 100);

    return () => clearTimeout(timerID);
  }, [statusClass, letter]);

  const theme = useContext(ThemeContext);
  const borderClass = theme + '-theme-border';
  const borderClassName = letter !== '' && statusClass === '' ? borderClass : '';

  return (
    <Col
      className={`${statusClassName} ${borderClassName} letter-box d-flex justify-content-center align-items-center fw-bold text-uppercase `}
    >
      {letter}
    </Col>
  );
}
