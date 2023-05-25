import { Col, Row } from 'react-bootstrap';

import { useContext } from 'react';

import { ThemeContext } from '../theme/theme-context';

export default function Header({
  onShowRules,
  onShowStatistics,
  onShowLanguageBanner,
  onChangeTheme,
}) {
  const theme = useContext(ThemeContext);
  const themeIconClass = theme === 'light' ? 'moon' : 'sun';

  const iconClasses = 'bi px-1 fs-4 me-2 pb-2';

  return (
    <Row as='header' className={`py-2 justify-content-center mb-2 ${theme}`}>
      <Col className='d-flex justify-content-between align-items-center'>
        <Col xs='auto'>
          <i className={`bi-question-circle-fill ${iconClasses}`} onClick={onShowRules} />

          <i className={` bi-${themeIconClass}-fill ${iconClasses}`} onClick={onChangeTheme} />
        </Col>

        <Col xs='auto' as='h1' className='fs-2 fw-bold my-1'>
          Wordle
        </Col>

        <Col xs='auto'>
          <i className={`bi-globe ${iconClasses}`} onClick={onShowLanguageBanner} />

          <i className={`bi-reception-4 ${iconClasses}`} onClick={onShowStatistics} />
        </Col>
      </Col>
    </Row>
  );
}
