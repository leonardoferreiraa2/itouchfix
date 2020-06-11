
import createCommons from '../Commons';


function createTypesCep() {
  const Commons = createCommons();
  const mask = '00.000-000';

  const getTypesCep = {
    'CEP': {
      func: 'cep',
      mask: mask,
      configInput: { 
        ...Commons.lblOrientacao,
        maxLength: mask.length,
        keyboardType: 'numeric',
        placeholder: mask,
      }
    } 
  };

  return {
    getTypesCep
  }
}


export default createTypesCep;
