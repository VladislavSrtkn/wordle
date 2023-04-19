import textData from './textData';
import languages from './languages';

export default function getLanguage() {
  if (localStorage.getItem('language')) {
    const language = localStorage.getItem('language');
    textData.setLanguage(language);

    return language;
  }

  const interfaceLanguage = textData.getLanguage();
  if (languages.find((lang) => lang.name === interfaceLanguage)) {
    return interfaceLanguage;
  }

  return 'en';
}
