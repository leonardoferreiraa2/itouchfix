/* 
  999-9999
*/

import createCommons from '../Commons';


function createRamal() {
  function typesRamal() {
    const Commons = createCommons();
    return {
      'RAMAL': {
        func: 'ramal',
        configInput: { 
          ...Commons.lblOrientacao, 
          maxLength: 8,
          keyboardType: 'numeric',
          placeholder: '000-0000',
        }
      }
    }
  };

  function get_ramal(value) {
    const Func = createCommons();
  
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

  return {
    get_ramal,
    typesRamal
  }
}


export default createRamal;
