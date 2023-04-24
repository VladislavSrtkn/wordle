import { Button, Form } from 'react-bootstrap';

import languages from './languages';
import textData from './textData';

import BannersWrapper from '../BannersWrapper';
import { useState } from 'react';

export default function LanguageBanner({ onHide, onChangeLanguage, currentlanguage }) {
  const [language, setLanguage] = useState(currentlanguage);

  function handleClick() {
    onChangeLanguage(language);
    onHide();
  }

  const input = languages.map((lang) => (
    <Form.Check
      key={lang.name}
      type='radio'
      value={lang.name}
      label={lang.label}
      onChange={() => setLanguage(lang.name)}
      checked={lang.name === language}
      className='border-bottom py-3'
    />
  ));

  const { languageBannerHeader, languageBannerText, select } = textData.lang;

  return (
    <BannersWrapper onHide={onHide} title={languageBannerHeader}>
      <p>{languageBannerText}</p>
      <Form.Group className='mb-4'>{input}</Form.Group>
      <Button variant='secondary' onClick={handleClick}>
        {select}
      </Button>
    </BannersWrapper>
  );
}
