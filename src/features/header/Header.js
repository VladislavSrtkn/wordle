import { Col, Row } from 'react-bootstrap';

export default function Header({
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
        <i className='bi bi-question-circle px-1 fs-4 me-2 icon-color' onClick={onShowRules} />
        {theme === 'light' && (
          <i className='bi bi-moon-fill px-1 fs-4 icon-color' onClick={onChangeTheme} />
        )}
        {theme === 'dark' && (
          <i className='bi bi-sun-fill px-1 fs-4 icon-color' onClick={onChangeTheme} />
        )}
      </Col>
      <Col xs='auto' as='h4' className='header'>
        Wordle ({language})
      </Col>
      <Col xs='auto'>
        <i className='bi bi-globe px-1 fs-4 icon-color' onClick={onChangeLanguage} />
        <i className='bi bi-reception-4 px-1 fs-4 ms-2 icon-color' onClick={onShowStatistics} />
      </Col>
    </Row>
  );
}
