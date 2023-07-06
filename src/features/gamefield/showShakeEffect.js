const ERROR_CLASS = 'error-shake';

export default function showShakeEffect(index) {
  const element = document.querySelector(`[data-gamefield-row="${index}"]`);
  element.classList.add(ERROR_CLASS);

  setTimeout(() => {
    element.classList.remove(ERROR_CLASS);
  }, 800);
}
