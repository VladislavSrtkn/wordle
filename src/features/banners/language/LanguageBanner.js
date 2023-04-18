import { Form } from 'react-bootstrap';

import languages from './languages';
import textData from './textData';

import BannersWrapper from '../BannersWrapper';

export default function LanguageBanner({ onHide, onChangeLanguage, language }) {
  const input = languages.map((lang) => (
    <Form.Check
      key={lang.name}
      type='radio'
      value={lang.name}
      label={`${lang.emoji} ${lang.label}`}
      onChange={() => onChangeLanguage(lang.name)}
      checked={lang.name === language}
      className='border-bottom py-3'
    />
  ));

  const { languageBannerHeader, languageBannerText } = textData.lang;

  return (
    <BannersWrapper onHide={onHide} title={languageBannerHeader}>
      <p>{languageBannerText}</p>
      <Form.Group className='mb-4'>{input}</Form.Group>
    </BannersWrapper>
  );
}
