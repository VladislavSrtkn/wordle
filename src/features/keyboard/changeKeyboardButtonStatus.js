// Function mutates the object, make sure a copy is passed as an argument

export default function changeKeyboardButtonStatus(value, status, keyboard) {
  //We need to use a 'for' loop to access the keyboard array and mutate it
  for (let i = 0; i < keyboard.length; i++) {
    keyboard[i] = keyboard[i].map((button) =>
      button.value === value && button.status !== 'inPlace' ? { value, status } : button
    );
  }
}
