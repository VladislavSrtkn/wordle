import { Col, Row } from 'react-bootstrap';

export default function Header({
  handleShowRules,
  handleShowStatistics,
  handleChangeTheme,
  handleChangeLanguage,
  theme,
  language,
}) {
  const displayedLanguage = language.slice(0, 2);

  return (
    <Row className='justify-content-between border-bottom py-2 mb-3'>
      <Col xs='auto'>
        <i className='bi bi-question-circle px-1 fs-4 icon-color' onClick={handleShowRules} />
        {theme === 'light' && (
          <i className='bi bi-moon-fill px-1 fs-4 icon-color' onClick={handleChangeTheme} />
        )}
        {theme === 'dark' && (
          <i className='bi bi-sun-fill px-1 fs-4 icon-color' onClick={handleChangeTheme} />
        )}
      </Col>
      <Col xs='auto' as='h4' className='header'>
        Wordle ({displayedLanguage})
      </Col>
      <Col xs='auto'>
        <i className='bi bi-globe px-1 fs-4 icon-color' onClick={handleChangeLanguage} />
        <i className='bi bi-reception-4 px-1 fs-4 icon-color' onClick={handleShowStatistics} />
      </Col>
    </Row>
  );
}
