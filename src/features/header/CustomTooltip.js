import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { useMediaQuery } from 'react-responsive';

export default function CustomTooltip({ children, text }) {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  if (isDesktopOrLaptop) {
    return (
      <OverlayTrigger placement='bottom' overlay={<Tooltip id={text}>{text}</Tooltip>}>
        {children}
      </OverlayTrigger>
    );
  }

  return <>{children}</>;
}
