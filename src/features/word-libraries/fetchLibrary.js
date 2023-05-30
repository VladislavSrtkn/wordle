export default async function fetchLibrary(language) {
  return fetch(`https://vladislavsrtkn.github.io/wordle_json/${language}_data.json`);
}
