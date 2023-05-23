export default function checkCharacterOnKeyboard(character, keyboard) {
  return keyboard.some((row) => row.find((btn) => btn.value === character));
}
