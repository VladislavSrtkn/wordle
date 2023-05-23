import { Button, Form } from 'react-bootstrap';

import { useState } from 'react';

import LANGUAGES from './languages';

import textData from './textData';

import BannersWrapper from '../BannersWrapper';

export default function LanguageBanner({ onHide, onChangeLanguage, currentlanguage }) {
  const { languageBannerHeader, languageBannerText, select } = textData.lang;

  const [language, setLanguage] = useState(currentlanguage);

  function handleSubmit() {
    onChangeLanguage(language);
    onHide();
  }

  function handleChange(e) {
    setLanguage(e.target.value);
  }

  const options = LANGUAGES.map((lang) => (
    <Form.Check
      name='languages'
      key={lang.name}
      type='radio'
      id={lang.name}
      value={lang.name}
      label={lang.label}
      onChange={handleChange}
      checked={lang.name === language}
      className='border-bottom py-3 fw-bold'
    />
  ));

  return (
    <BannersWrapper onHide={onHide} title={languageBannerHeader}>
      <p>{languageBannerText}</p>

      <Form className='mb-4' onSubmit={handleSubmit}>
        {options}

        <Button type='submit' variant='secondary' className='mt-3'>
          {select}
        </Button>
      </Form>
    </BannersWrapper>
  );
}
