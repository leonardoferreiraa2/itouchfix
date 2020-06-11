
import createCommons from '../Commons';


function createTypesNumber() {
  const Commons = createCommons();
  const mask_card = '0000 0000 0000 0000';

  const getTypesNumber = {
    'GENERAL': {
      func: 'general',
      configInput: { 
        ...Commons.lblOrientacao, 
        keyboardType: 'numeric',
        placeholder: '0',
      },
    }, 
    'DECIMAL': {
      func: 'decimal',
      configInput: { 
        ...Commons.lblOrientacao, 
        keyboardType: Platform.OS === 'ios' ? 'decimal-pad' : 'numeric', 
        placeholder: '0.00',
      },
    }, 
    'CURRENCY': {
      func: 'currency',
      configInput: { 
        ...Commons.lblOrientacao, 
        keyboardType: 'numeric',
        placeholder: 'R$0.00',
      },
    }, 
    'PERCENT': {
      func: 'percent',
      configInput: { 
        ...Commons.lblOrientacao, 
        keyboardType: Platform.OS === 'ios' ? 'decimal-pad' : 'numeric', 
        placeholder: '0.00', 
      },
    }, 
    'CARD': {
      func: 'card',
      mask: mask_card,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_card.length,
        keyboardType: 'numeric',
        placeholder: mask_card,
      },
    }
  };

  return {
    getTypesNumber
  }
}


export default createTypesNumber;
