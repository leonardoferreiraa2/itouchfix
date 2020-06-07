/*
  general = 0
  decimal = 0.00
  currency = $0.00
  percent = 0%
  card = 9999 9999 9999 9999
*/

import createCommons from '../Commons';
import createTypesNumber from './types';

function createNumber() {
  function get_general(value) {
    const Commons = createCommons();
    return Commons.filterValue(value, 'only-number');
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
    const Commons = createCommons();
  
    const num = Commons.filterValue(value, 'only-number');
    const typeMask = Commons.getObjKeyForIndex(typesNumber(), 4);
    const mask = Commons.formatMask(num, typesNumber()[typeMask].mask);

    return mask;
  };

  function typesNumber() {
    return createTypesNumber().getTypesNumber;
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
