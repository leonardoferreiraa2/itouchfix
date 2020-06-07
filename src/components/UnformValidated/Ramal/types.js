
import createCommons from '../Commons';


function createTypesRamal() {
  const Commons = createCommons();
  const mask = '999-9999';

  const getTypesRamal = {
    'RAMAL': {
      func: 'ramal',
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
    getTypesRamal
  }
}


export default createTypesRamal;
