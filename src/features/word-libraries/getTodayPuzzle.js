export default function getTodayPuzzle(library, dayNumber) {
  if (library.length < dayNumber) {
    const difference = dayNumber - library.length - 1;

    return library[difference];
  }

  return library[dayNumber];
}
