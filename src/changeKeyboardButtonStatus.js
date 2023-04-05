// Function mutates the object, make sure a copy is passed as an argument

export default function changeKeyboardButtonStatus(value, status, keyboard) {
  for (let i = 0; i < keyboard.length; i++) {
    keyboard[i] = keyboard[i].map((item) =>
      item.value === value && item.status !== 'inPlace' ? { value, status } : item
    );
  }
}
