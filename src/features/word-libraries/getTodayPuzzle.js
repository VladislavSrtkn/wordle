export default function getTodayPuzzle(library, dayNumber) {
  if (library.length <= dayNumber) {
    const index = dayNumber % library.length;
    return library[index];
  }

  return library[dayNumber];
}
