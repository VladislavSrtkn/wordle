import LANGUAGES from '../banners/language/languages';

export default function clearOldProgress(dayNumber) {
  const languages = LANGUAGES.map((lang) => lang.name);

  for (let i = 0; i < dayNumber; i++) {
    languages.forEach((lang) => {
      const previousSave = lang + i;

      localStorage.removeItem(previousSave);
    });
  }
}
