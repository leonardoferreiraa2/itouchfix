/*
  CNPJ
  99.999.999/9999-99
*/

import createCommons from '../Commons';


function createCNPJ() {
  function typesCNPJ() {
    const Commons = createCommons();
    return {
      'CNPJ': {
        func: 'cnpj',
        configInput: { 
          ...Commons.lblOrientacao,
          maxLength: 18,
          keyboardType: 'numeric',
          placeholder: '00.000.000/0000-00',
        },
      }
    }
  };

  function get_cnpj(value) {
    return value;
  };

  return {
    get_cnpj,
    typesCNPJ
  }
}


export default createCNPJ;
