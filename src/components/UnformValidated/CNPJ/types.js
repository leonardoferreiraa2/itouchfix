
import createCommons from '../Commons';


function createTypesCNPJ() {
  const Commons = createCommons();
  const mask = '00.000.000/0000-00';

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
