import { Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';

import { useContext } from 'react';

import { ThemeContext } from '../../theme/theme-context';

export default function ErrorBanner({ text, onClose }) {
  const theme = useContext(ThemeContext);

  return (
    <ToastContainer position='top-center' className='mt-2'>
      <Toast onClose={onClose}>
        <ToastHeader className={`justify-content-between fs-4 fw-bold ${theme}`}>
          <i className='bi bi-exclamation-circle-fill'></i>
          Wordle
        </ToastHeader>
        <ToastBody className={`fs-6 ${theme}`}>{text}</ToastBody>
      </Toast>
    </ToastContainer>
  );
}
