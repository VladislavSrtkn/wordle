import textData from './textData';

export default function getLanguage() {
  if (localStorage.getItem('language')) {
    return localStorage.getItem('language');
  } else {
    const interfaceLanguage = textData.getInterfaceLanguage();
    return interfaceLanguage;
  }
}
