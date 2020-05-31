/* 
  999-9999
*/

import Func from './Validations';


function get_ramal(value) {
  const num = Func.filterValue(value, 'only-number');
  const len = num.length;
  let mask = undefined;

  if (len <= 3) {
    mask = num;
  } else if (len <= 7) {
    mask = num.substr(0, 3) + '-' + num.substr(3, 4);
  }
  
  return mask;
};


export default {
  get_ramal,
}
