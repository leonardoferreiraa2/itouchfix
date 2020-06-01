/*
//Object.assign(ob1, { sobreq: '' })
mask="HH" label="Horas trabalhadas"

maxLength={2}
- faz validação
- tamanho mínimo máximo
- icones e label

*/
import React from 'react';
import Fun from './SetFunctions';
import Types from './Types';

function getMaskValue(prop) {
  const type = prop.type !== undefined ? prop.type.toUpperCase() : '';
  const value = prop.value;

  if (value === '' || Object.keys(types).indexOf(type) === -1) {
    value;
    return;
  };

  const getFuncMask = Fun.getMaskValueFunc[types[type].func];
  return getFuncMask(value);
};

const letters_numbers = {
  'only-letter': 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
  'only-number': '0123456789',
};

function filterValue(value, type, start, end) {
  const strFind = letters_numbers[type];
  const setValue = start + end >= 0 ? value.substr(start, end) : value;

  let newValue = '';
  for (let i = 0; i < setValue.length; i++) {
    if (strFind.indexOf(setValue[i].toUpperCase()) >= 0) {
      newValue += setValue[i];
    };
  };

  return newValue;
};

export const types = Types.types;

export default {
  getMaskValue,
  filterValue,
  types,
};
