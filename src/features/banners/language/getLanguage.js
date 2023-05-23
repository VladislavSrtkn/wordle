import textData from './textData';
import LANGUAGES from './languages';

export default function getLanguage() {
  if (localStorage.getItem('language')) {
    const language = localStorage.getItem('language');
    return language;
  }

  const interfaceLanguage = textData.getLanguage();
  if (LANGUAGES.find((lang) => lang.name === interfaceLanguage)) {
    return interfaceLanguage;
  }

  return 'en';
}
