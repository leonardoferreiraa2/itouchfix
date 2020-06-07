
import createCommons from '../Commons';


function createTypesPlaque() {
  const Commons = createCommons();
  const mask = '999-9999';

  const getTypesPlaque = {
    'PLAQUE': {
      func: 'plaque',
      mask: mask,
      configInput: { 
        ...Commons.lblOrientacao,
        maxLength: mask.length,
        ...Commons.configTextCase,
        placeholder: 'AAA-0A00',
      }
    }  
  };

  return {
    getTypesPlaque
  }
}


export default createTypesPlaque;
