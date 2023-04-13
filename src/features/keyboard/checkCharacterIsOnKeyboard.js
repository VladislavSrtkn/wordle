export default function checkCharacterIsOnKeyboard(character, keyboard) {
  let result = false;

  keyboard.forEach((row) => {
    row.forEach((button) => {
      if (button.value === character) result = true;
    });
  });

  return result;
}
