
import createCommons from '../Commons';


function createTypesCPF() {
  const Commons = createCommons();
  const mask = '999.999.999-99';

  const getTypesCPF = {
    'CPF': {
      func: 'cpf',
      mask: mask,
      configInput: { 
        ...Commons.lblOrientacao,
        maxLength: mask.length,
        keyboardType: 'numeric',
        placeholder: mask,
      },
    }
  };

  return {
    getTypesCPF
  }
}


export default createTypesCPF;
