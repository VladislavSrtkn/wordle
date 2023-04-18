import textData from './textData';
import languages from './languages';

export default function getLanguage() {
  if (localStorage.getItem('language')) {
    return localStorage.getItem('language');
  }

  const interfaceLanguage = textData.getLanguage();
  if (languages.find((lang) => lang.name === interfaceLanguage)) {
    return interfaceLanguage;
  }

  return 'en';
}
