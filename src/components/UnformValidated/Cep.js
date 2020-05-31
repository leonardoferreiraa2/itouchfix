/*
  99.999-999
*/

import Func from './Validations';

function get_cep(value) {
  const num = Func.filterValue(value, 'only-number');
  const len = num.length;
  let mask = undefined;
  
  if (len <= 2) {
    mask = partStr(num, 1);
  } else if (len <= 5) {
    mask = partStr(num, 1) + '.' + partStr(num, 2);
  } else if (len <= 8) {
    mask = partStr(num, 1) + '.' + partStr(num, 2) + '-' + partStr(num, 3);
  };
  
  return mask;
};

function partStr(value, part) {
  if (part == 1) {
    return value.substr(0, 2);
  } else if (part == 2) {
    return value.substr(2, 3);
  } else if (part == 3) {
    return value.substr(5, 3);
  };
};

export default {
  get_cep,
};
