export default function checkWordInLibrary(word, library) {
  if (library.find((item) => item.word === word)) {
    return true;
  } else return false;
}
