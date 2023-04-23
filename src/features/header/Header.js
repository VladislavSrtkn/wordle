import { Col, Row } from 'react-bootstrap';

import textData from '../banners/language/textData';

import CustomTooltip from './CustomTooltip';

export default function Header({
  onShowRules,
  onShowStatistics,
  onChangeTheme,
  onShowLanguageBanner,
  theme,
}) {
  const { tooltipRules, tooltipThemeDark, tooltipThemeLight, tooltipLanguage, tooltipStatistics } =
    textData.tips;

  const iconClasses = 'bi px-1 fs-4 me-2 header-icon pb-2';

  return (
    <Row className='justify-content-between py-2 mb-3 header'>
      <Col xs='auto'>
        <CustomTooltip text={tooltipRules}>
          <i className={`bi-question-circle ${iconClasses}`} onClick={onShowRules} />
        </CustomTooltip>

        {theme === 'light' ? (
          <CustomTooltip text={tooltipThemeDark}>
            <i className={` bi-moon-fill ${iconClasses}`} onClick={onChangeTheme} />
          </CustomTooltip>
        ) : (
          <CustomTooltip text={tooltipThemeLight}>
            <i className={`bi-sun-fill ${iconClasses}`} onClick={onChangeTheme} />
          </CustomTooltip>
        )}
      </Col>

      <Col xs='auto' as='h1' className='fs-2'>
        Wordle
      </Col>

      <Col xs='auto'>
        <CustomTooltip text={tooltipLanguage}>
          <i className={`bi-globe ${iconClasses}`} onClick={onShowLanguageBanner} />
        </CustomTooltip>

        <CustomTooltip text={tooltipStatistics}>
          <i className={`bi-reception-4 ${iconClasses}`} onClick={onShowStatistics} />
        </CustomTooltip>
      </Col>
    </Row>
  );
}
