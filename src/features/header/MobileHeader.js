import { Col, Row } from 'react-bootstrap';

export default function MobileHeader({
  onShowRules,
  onShowStatistics,
  onChangeTheme,
  onChangeLanguage,
  theme,
  language,
}) {
  return (
    <Row className='justify-content-between border-bottom py-2 mb-3'>
      <Col xs='auto'>
        <i className='bi bi-question-circle px-1 fs-4 me-2 header-icon' onClick={onShowRules} />

        {theme === 'light' ? (
          <i className='bi bi-moon-fill px-1 fs-4 header-icon' onClick={onChangeTheme} />
        ) : (
          <i className='bi bi-sun-fill px-1 fs-4 header-icon' onClick={onChangeTheme} />
        )}
      </Col>
      <Col xs='auto' as='h1' className='fs-3'>
        Wordle ({language})
      </Col>
      <Col xs='auto'>
        <i className='bi bi-globe px-1 fs-4 header-icon' onClick={onChangeLanguage} />

        <i className='bi bi-reception-4 px-1 fs-4 ms-2 header-icon' onClick={onShowStatistics} />
      </Col>
    </Row>
  );
}
