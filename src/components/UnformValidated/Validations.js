/*

mask="HH" label="Horas trabalhadas"

maxLength={2}
- faz validação
- tamanho mínimo máximo
- icones e label

*/
import React from 'react';
import Fun from './SetFunctions';

function getMaskValue(prop) {
  if (prop.value === '') return;

  const value = prop.value;
  const types = typesValidations();
  const type = prop.type.toUpperCase();

  switch (type) {
    case types.cep:                return Fun.Cep.get_cep(value);
    case types.cnpj:               return Fun.CNPJ.get_cnpj(value);
    case types.cpf:                return Fun.CPF.get_cpf(value);
    case types.hh_mm:              return Fun.Date.get_hh_mm(value);
    case types.hh_mm_ss:           return Fun.Date.get_hh_mm_ss(value);
    case types.dur_hh_mm:          return Fun.Date.get_dur_hh_mm(value);
    case types.dur_hh_mm_ss:       return Fun.Date.get_dur_hh_mm_ss(value);
    case types.dd_mm_yy:           return Fun.Date.get_dd_mm_yy(value);
    case types.dd_mm_yy_hh_mm:     return Fun.Date.get_dd_mm_yy_hh_mm(value);
    case types.dd_mm_yy_hh_mm_ss:  return Fun.Date.get_dd_mm_yy_hh_mm_ss(value);
    case types.general:            return Fun.Number.get_general(value);
    case types.decimal:            return Fun.Number.get_decimal(value);
    case types.currency:           return Fun.Number.get_currency(value);
    case types.percent:            return Fun.Number.get_percent(value);
    case types.card:               return Fun.Number.get_card(value);
    case types.phone:              return Fun.Phone.get_phone(value);
    case types.phone_dd:           return Fun.Phone.get_phone_ddd(value);
    case types.plaque:             return Fun.Plaque.get_plaque(value);
    case types.ramal:              return Fun.Ramal.get_ramal(value);
    case types.string_low:         return Fun.String.get_string_low(value);
    case types.string_up:          return Fun.String.get_string_up(value);
    case types.password:           return Fun.String.get_password(value);
    case types.email:              return Fun.String.get_email(value);
    default:                       return value
  };
};

function typesValidations() {
  return {
    cep:                'CEP',
    cnpj:               'CNPJ',
    cpf:                'CPF',
    hh_mm:              'HH:MM',
    hh_mm_ss:           'HH:MM:SS',
    dur_hh_mm:          '[HH]:MM',
    dur_hh_mm_ss:       '[HH]:MM:SS',
    dd_mm_yy:           'DD/MM/yyyy',
    dd_mm_yy_hh_mm:     'DD/MM/yyyy HH:MM',
    dd_mm_yy_hh_mm_ss:  'DD/MM/yyyy HH:MM:SS',
    general:            'GENERAL',
    decimal:            'DECIMAL',
    currency:           'CURRENCY',
    percent:            'PERCENT',
    card:               'CARD',
    phone:              'PHONE',
    phone_dd:           'PHONE-DDD',
    plaque:             'PLAQUE',
    ramal:              'RAMAL',
    string_low:         'STRING-LOW',
    string_up:          'STRING-UP',
    password:           'PASSWORD',
    email:              'EMAIL',
  };
};


function get_letters_numbers() {
  return {
    letters: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    numbers: '0123456789',
  };
};

function filterValue(value, type, start, end) {
  const get = get_letters_numbers();
  const strFind = type === 'only-letter' ? get.letters : get.numbers;

  const setValue = start >= 0 || end >= 0 ? 
    value.substr(start, end) : value;

  let newValue = '';
  for (let i = 0; i < setValue.length; i++) {
    if (strFind.indexOf(setValue[i]) >= 0) {
      newValue += setValue[i];
    };
  };
  return newValue;
};


export default {
  getMaskValue,
  typesValidations,
  filterValue,
  get_letters_numbers,
};
