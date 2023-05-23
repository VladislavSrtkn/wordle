import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';

import { useContext } from 'react';

import { ThemeContext } from '../theme/theme-context';

export default function BannersWrapper({ onHide, title, children }) {
  const theme = useContext(ThemeContext);

  return (
    <Modal show={true} onHide={onHide}>
      <ModalHeader closeButton className={theme}>
        <ModalTitle className='text-uppercase'>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody className={theme}>{children}</ModalBody>
    </Modal>
  );
}
