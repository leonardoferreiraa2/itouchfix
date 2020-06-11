
import createCommons from '../Commons';


function createTypesPlaque() {
  const Commons = createCommons();
  const mask = '000-0000';

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
