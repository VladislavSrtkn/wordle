const ERROR_CLASS = 'error-shake';
const INITIAL_CLASS = '.letter-row';

function removeCssClass(initialClass = INITIAL_CLASS, removedClass = ERROR_CLASS) {
  document.querySelectorAll(initialClass)?.forEach((elem) => elem.classList.remove(removedClass));
}

export default function addCsslass(number, initialClass = INITIAL_CLASS) {
  const elements = document.querySelectorAll(initialClass);
  elements[number]?.classList.add(ERROR_CLASS);

  setTimeout(() => {
    removeCssClass();
  }, 800);
}
