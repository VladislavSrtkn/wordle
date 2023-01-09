export default function checkWordInLibrary(word, wordsArray) {
  if (wordsArray.find((item) => item.word === word)) {
    return true;
  } else return false;
}
