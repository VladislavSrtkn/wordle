import { cloneDeep } from 'lodash';

const COUNT_OF_ROWS = 6;

const row = [
  { value: '', status: '' },
  { value: '', status: '' },
  { value: '', status: '' },
  { value: '', status: '' },
  { value: '', status: '' },
];

const emptyField = [];

for (let i = 0; i < COUNT_OF_ROWS; i++) {
  emptyField.push(cloneDeep(row));
}

export default emptyField;
