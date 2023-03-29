import { Col } from 'react-bootstrap';

import { useEffect, useState } from 'react';

export default function LetterContainer({ letter, cssClass }) {
  const [className, setClassName] = useState(null);

  useEffect(() => {
    setClassName(null);
    let timerID = setTimeout(() => setClassName(cssClass), 100);

    return () => clearTimeout(timerID);
  }, [cssClass, letter]);

  return <Col className={`${className} letter-container text-center`}>{letter}</Col>;
}
