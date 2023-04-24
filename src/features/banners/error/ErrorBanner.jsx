import { Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';

import { useContext } from 'react';

import { ThemeContext } from '../../theme/theme-context';

export default function ErrorBanner({ text, onClose }) {
  const theme = useContext(ThemeContext);

  return (
    <ToastContainer position='top-center' className='mt-1'>
      <Toast onClose={onClose}>
        <ToastHeader className='justify-content-between fs-4' style={{ ...theme }}>
          <i className='bi bi-exclamation-circle-fill'></i>
          <strong>Wordle</strong>
        </ToastHeader>
        <ToastBody style={{ ...theme }} className='fs-6'>
          {text}
        </ToastBody>
      </Toast>
    </ToastContainer>
  );
}
