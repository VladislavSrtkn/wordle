import textData from './textData';

export default function saveLanguage(language) {
  localStorage.setItem('language', language);
  textData.setLanguage(language);
}
