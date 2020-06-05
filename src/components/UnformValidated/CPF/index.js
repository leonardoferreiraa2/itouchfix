/* 
  CPF
  999.999.999-99
*/

import createCommons from '../Commons';


function createCPF() {
  function typesCPF() {
    const Commons = createCommons();
    return {
      'CPF': {
        func: 'cpf',
        configInput: { 
          ...Commons.lblOrientacao,
          maxLength: 14,
          keyboardType: 'numeric',
          placeholder: '000.000.000-00',
        },
      }
    }
  };

  function get_cpf(value) {
    return value;
  };

  return {
    get_cpf,
    typesCPF
  }
}


export default createCPF;
