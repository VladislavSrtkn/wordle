const ERROR_CLASS = 'error-shake';

export default function showShakeEffect(index) {
  const elements = document.querySelector('.game-field').children;
  elements[index].classList.add(ERROR_CLASS);

  setTimeout(() => {
    elements[index].classList.remove(ERROR_CLASS);
  }, 800);
}
