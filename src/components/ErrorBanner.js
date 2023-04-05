import { Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';

import { useContext } from 'react';

import { ThemeContext } from '../theme-context';

export default function ErrorBanner({ text, onClose }) {
  const theme = useContext(ThemeContext);

  return (
    <ToastContainer position='top-center' className='mt-1'>
      <Toast onClose={onClose}>
        <ToastHeader className='justify-content-between' style={{ ...theme }}>
          <i className='bi bi-exclamation-circle-fill'></i>
          <strong>Wordle</strong>
        </ToastHeader>
        <ToastBody style={{ ...theme }}>{text}</ToastBody>
      </Toast>
    </ToastContainer>
  );
}
