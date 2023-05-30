import { COUNT_OF_TRIES, COUNT_OF_LETTERS } from '../../config';

function getEmptyLetter() {
  return { value: '', status: '' };
}

function getEmptyRow() {
  const row = [];

  while (row.length < COUNT_OF_LETTERS) {
    row.push(getEmptyLetter());
  }

  return row;
}

export default function getEmptyField() {
  const emptyField = [];

  while (emptyField.length < COUNT_OF_TRIES) {
    emptyField.push(getEmptyRow());
  }
  return emptyField;
}
