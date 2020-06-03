/*
  general = 0
  decimal = 0.00
  currency = $0.00
  percent = 0%
  card = 9999 9999 9999 9999
*/

import createCommons from './Commons';


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


export default {
  get_general,
  get_decimal,
  get_currency,
  get_percent,
  get_card,
}
