
import createCommons from '../Commons';
import createTypesNumber from './types';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
//import 'intl/locale-data/jsonp/en;

function createNumber() {
  function get_general(value) {
    return createCommons().filterValue(value, 'only-number');
  };
  
  function get_decimal(value) {
    return decimalFormat(value);
  };
  
  function get_currency(value) {
    let cur = decimalFormat(value);
    
    if (cur === '') { return; };

    cur = Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL'
      }).format(cur);

    return cur;
  };
  
  function get_percent(value) {
    return decimalFormat(value); //o que difere do decimal é o símbolo usado
  };
  
  function get_card(value) {
    const Commons = createCommons();
  
    const num = Commons.filterValue(value, 'only-number');
    const typeMask = Commons.getObjKeyForIndex(typesNumber(), 4);
    const mask = Commons.formatMask(num, typesNumber()[typeMask].mask);

    return mask;
  };

  function typesNumber() {
    return createTypesNumber().getTypesNumber;
  };

  function decimalFormat(value) {
    const Commons = createCommons();
    let num = Commons.filterValue(value, 'only-number');

    // está apagando - se digitar 0, num e value vai ser 0, logo, segue
    if (num === '00' || num === '' || (num === '0' && value !== '0')) { 
      return '';
    };

    // essa conversão em inteiro é para tirar os zeros a esquerda
    num = String(parseInt(num));

    // o primeiro formato é quando tem até 3 caracteres
    const numPass = num.length < 3 
      ? '0'.repeat(3 - num.length) + String(num)
      : String(num);
    
    // redimensiona de forma dinâmica a mask (ex: 124252 = 1242.52)
    const typeMask = numPass.length === 3 
      ? '0.00' 
      : '0'.repeat(numPass.length - 2) + '.00'; 

    return Commons.formatMask(numPass, typeMask);
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
