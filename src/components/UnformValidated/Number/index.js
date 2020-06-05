/*
  general = 0
  decimal = 0.00
  currency = $0.00
  percent = 0%
  card = 9999 9999 9999 9999
*/

import createCommons from '../Commons';


function createNumber() {
  function typesNumber() {
    const Commons = createCommons();
    return {
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
          placeholder: '$0.00',
        },
      }, 
      'PERCENT': {
        func: 'percent',
        configInput: { 
          ...Commons.lblOrientacao, 
          keyboardType: Platform.OS === 'ios' ? 'decimal-pad' : 'numeric', 
          placeholder: '%0.00', 
        },
      }, 
      'CARD': {
        func: 'card',
        configInput: { 
          ...Commons.lblOrientacao, 
          keyboardType: 'numeric',
          placeholder: '0000 0000 0000 0000',
        },
      }
    }
  };

  function get_general(value) {
    const Func = createCommons();
    return Func.filterValue(value, 'only-number');
  };
  
  function get_decimal(value) {
    return value;
  };
  
  function get_currency(value) {
    return value;
  };
  
  function get_percent(value) {
    return value;
  };
  
  function get_card(value) {
    return value;
  };

  return {
    get_general,
    get_decimal,
    get_currency,
    get_percent,
    get_card,
    typesNumber
  }
}


export default createNumber;
