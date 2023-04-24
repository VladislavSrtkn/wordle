import { Col, Row } from 'react-bootstrap';

export default function Header({
  onShowRules,
  onShowStatistics,
  onChangeTheme,
  onShowLanguageBanner,
  theme,
}) {
  const iconClasses = 'bi px-1 fs-4 me-2 header-icon pb-2';

  return (
    <Row className='justify-content-between py-2 mb-3 header'>
      <Col xs='auto'>
        <i className={`bi-question-circle-fill ${iconClasses}`} onClick={onShowRules} />

        {theme === 'light' ? (
          <i className={` bi-moon-fill ${iconClasses}`} onClick={onChangeTheme} />
        ) : (
          <i className={`bi-sun-fill ${iconClasses}`} onClick={onChangeTheme} />
        )}
      </Col>

      <Col xs='auto' as='h1' className='fs-2'>
        Wordle
      </Col>

      <Col xs='auto'>
        <i className={`bi-globe ${iconClasses}`} onClick={onShowLanguageBanner} />

        <i className={`bi-reception-4 ${iconClasses}`} onClick={onShowStatistics} />
      </Col>
    </Row>
  );
}
