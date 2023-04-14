import { Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';

import textData from '../language/textData';

export default function DesktopHeader({
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
        <OverlayTrigger placement='bottom' overlay={<Tooltip>{textData.tooltipRules}</Tooltip>}>
          <i className='bi bi-question-circle px-1 fs-4 me-2 header-icon' onClick={onShowRules} />
        </OverlayTrigger>

        {theme === 'light' && (
          <OverlayTrigger
            placement='bottom'
            overlay={<Tooltip>{textData.tooltipThemeDark}</Tooltip>}
          >
            <i className='bi bi-moon-fill px-1 fs-4 header-icon' onClick={onChangeTheme} />
          </OverlayTrigger>
        )}

        {theme === 'dark' && (
          <OverlayTrigger
            placement='bottom'
            overlay={<Tooltip>{textData.tooltipThemeLight}</Tooltip>}
          >
            <i className='bi bi-sun-fill px-1 fs-4 header-icon' onClick={onChangeTheme} />
          </OverlayTrigger>
        )}
      </Col>
      <Col xs='auto' as='h1' className='fs-3'>
        Wordle ({language})
      </Col>
      <Col xs='auto'>
        <OverlayTrigger placement='bottom' overlay={<Tooltip>{textData.tooltipLanguage}</Tooltip>}>
          <i className='bi bi-globe px-1 fs-4 header-icon' onClick={onChangeLanguage} />
        </OverlayTrigger>

        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip>{textData.tooltipStatistics}</Tooltip>}
        >
          <i className='bi bi-reception-4 px-1 fs-4 ms-2 header-icon' onClick={onShowStatistics} />
        </OverlayTrigger>
      </Col>
    </Row>
  );
}
