
import createCommons from '../Commons';


function createTypesCNPJ() {
  const Commons = createCommons();
  const mask = '99.999.999/9999-99';

  const getTypesCNPJ = {
    'CNPJ': {
      func: 'cnpj',
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
    getTypesCNPJ
  }
}


export default createTypesCNPJ;
