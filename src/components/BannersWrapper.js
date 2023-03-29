import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';

import { ThemeContext } from '../theme-context';
import { useContext } from 'react';

export default function BannersWrapper({ onHide, children, title }) {
  const theme = useContext(ThemeContext);
  return (
    <Modal show={true} fullscreen={true} onHide={onHide}>
      <ModalHeader closeButton style={{ ...theme }}>
        <ModalTitle className='text-uppercase'>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody style={{ ...theme }}>{children}</ModalBody>
    </Modal>
  );
}
