import { Col } from 'react-bootstrap';

import { useEffect, useState } from 'react';

export default function LetterBox({ letter, cssClass }) {
  const [className, setClassName] = useState(null);

  // Update CSS class to display animation correctly on re-render
  useEffect(() => {
    setClassName(null);
    let timerID = setTimeout(() => setClassName(cssClass), 100);

    return () => clearTimeout(timerID);
  }, [cssClass, letter]);

  return <Col className={`${className} letter-box`}>{letter}</Col>;
}
