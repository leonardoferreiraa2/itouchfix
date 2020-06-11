
import createCommons from '../Commons';


function createTypesRamal() {
  const Commons = createCommons();
  const mask = '000-0000';

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
