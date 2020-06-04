/* 
  phone-ddd

  (99) 9999-9999
  (99) 99999-9999

  phone

  9999-9999
  99999-9999
*/

import createCommons from './Commons';


function get_phone(value) {
  const Func = createCommons();

  const num = Func.filterValue(value, 'only-number');
  const len = num.length;
  let mask = '';

  if (len <= 4) {
    mask = num;
  } else if (len <= 8) {
    mask = partStr(num, 1) + '-' + partStr(num, 2);
  } else if (len == 9) {
    mask = partStr(num, 3) + '-' + partStr(num, 4);
  }
  
  return mask;
};

function get_phone_ddd(value) {
  const Func = createCommons();

  const num = Func.filterValue(value, 'only-number');
  const len = num.length;
  let mask = '';

  if (len === 0) return '';

  if (len <= 2) {
    mask =
      '(' + num;
  } else if (len <= 6) {
    mask = 
      '(' + partStr(num, 5) + ') ' + partStr(num, 6);
  } else if (len <= 10) {
    mask = 
      '(' + partStr(num, 5) + ') ' + partStr(num, 6) + '-' + partStr(num, 7);
  } else if (len <= 11) {
    mask = 
      '(' + partStr(num, 5) + ') ' + partStr(num, 8) + '-' + partStr(num, 9);
  };
  
  return mask;
};

function partStr(value, part) {
  if (part == 1) {
    return value.substr(0, 4);
  } else if (part == 2) {
    return value.substr(4, 4);
  } else if (part == 3) {
    return value.substr(0, 5);
  } else if (part == 4) {
    return value.substr(5, 4);
  } else if (part == 5) {
    return value.substr(0, 2);
  } else if (part == 6) {
    return value.substr(2, 4);
  } else if (part == 7) {
    return value.substr(6, 4);
  } else if (part == 8) {
    return value.substr(2, 5);
  } else if (part == 9) {
    return value.substr(7, 4);
  };
};

export default {
  get_phone,
  get_phone_ddd,
}
