import _ from 'lodash';

const row = [
  { value: '', status: '' },
  { value: '', status: '' },
  { value: '', status: '' },
  { value: '', status: '' },
  { value: '', status: '' },
];

const countOfRows = 6;

const emptyField = [];

for (let i = 0; i < countOfRows; i++) {
  emptyField.push(_.cloneDeep(row));
}

export default emptyField;
