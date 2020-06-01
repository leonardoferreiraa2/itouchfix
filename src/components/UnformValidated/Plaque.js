/* 
  AAA-9999
  AAA-9A99
*/

import Func from './Validations';


function get_plaque(value) {
  value = value.replace('-', '');
  const len = value.length;
  let mask = undefined;

  if (len <= 3) {
    mask = partStr(value, 1);
  } else if (len <= 4) {
    mask = partStr(value, 1) + '-' + partStr(value, 2);
  } else if (len <= 7) {
    mask = partStr(value, 1) + '-' +  partStr(value, 2) + 
      partStr(value, 3) + partStr(value, 4);
  };
  
  return mask.toUpperCase();
};

function partStr(value, part) {
  if (part == 1) {
    // três primeiros dígitos
    return Func.filterValue(value, 'only-letter', 0, 3);
  } else if (part == 2) {
    // quarto dígito
    return Func.filterValue(value, 'only-number', 3, 1);
  } else if (part == 3) {
    // quinto dígito: padrão antigo (número) ou mercosul (letra)
    const part3_1 = Func.filterValue(value, 'only-letter', 4, 1);
    const part3_2 = Func.filterValue(value, 'only-number', 4, 1);
    const part3 = part3_1 !== '' ? part3_1 : part3_2;
    return part3;
  } else if (part == 4) {
    // três últimos dígitos
    return Func.filterValue(value, 'only-number', 5, 2);
  };
};

export default {
  get_plaque,
}
