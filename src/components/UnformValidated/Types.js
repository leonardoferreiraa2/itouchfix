import React from 'react';
import { Platform } from 'react-native';


// ################## COMUNS
const configTextCase = {
  secureTextEntry: Platform.OS === 'ios' ? false : true, 
  keyboardType: Platform.OS === 'ios' ? null : 'visible-password',
  autoCapitalize: 'characters', 
};

const num_with_five = {
  maxLength: 5,
  keyboardType: 'numeric',
};

const num_with_eigth = {
  maxLength: 8,
  keyboardType: 'numeric',
};

const lblOrientacao = {
  lblLeft: '',
  lblRight: '',
};


export const types = {
  'CEP': {
    func: 'cep',
    configInput: { 
      ...lblOrientacao,
      maxLength: 10,
      keyboardType: 'numeric',
    },
  }, 
  'CNPJ': {
    func: 'cnpj',
    configInput: { 
      ...lblOrientacao,
      maxLength: 18,
      keyboardType: 'numeric',
    },
  }, 
  'CPF': {
    func: 'cpf',
    configInput: { 
      ...lblOrientacao,
      maxLength: 14,
      keyboardType: 'numeric',
    },
  },
  'HH:MM': {
    func: 'hh_mm',
    configInput: { ...lblOrientacao, ...num_with_five },
  },
  'HH:MM:SS': {
    func: 'hh_mm_ss',
    configInput: { ...lblOrientacao, ...num_with_eigth },
  }, 
  '[HH]:MM': {
    func: 'dur_hh_mm',
    configInput: { ...lblOrientacao, ...num_with_five },
  },         
  '[HH]:MM:SS': {
    func: 'dur_hh_mm_ss',
    configInput: { ...lblOrientacao, ...num_with_eigth },
  },             
  'DD/MM/YYYY': {
    func: 'dd_mm_yy',
    configInput: { 
      ...lblOrientacao,
      maxLength: 10,
      keyboardType: 'numeric',
    },
  },
  'DD/MM/YYYY HH:MM': {
    func: 'dd_mm_yy_hh_mm',
    configInput: { 
      ...lblOrientacao,
      maxLength: 16,
      keyboardType: 'numeric',
    },
  },
  'DD/MM/YYYY HH:MM:SS': {
    func: 'dd_mm_yy_hh_mm_ss',
    configInput: { 
      ...lblOrientacao,
      maxLength: 19,
      keyboardType: 'numeric',
    },
  },  
  'GENERAL': {
    func: 'general',
    configInput: { ...lblOrientacao, keyboardType: 'numeric' },
  }, 
  'DECIMAL': {
    func: 'decimal',
    configInput: { 
      ...lblOrientacao, 
      keyboardType: Platform.OS === 'ios' ? 'decimal-pad' : 'numeric', 
    },
  }, 
  'CURRENCY': {
    func: 'currency',
    configInput: { ...lblOrientacao, keyboardType: 'numeric' },
  }, 
  'PERCENT': {
    func: 'percent',
    configInput: { 
      ...lblOrientacao, 
      keyboardType: Platform.OS === 'ios' ? 'decimal-pad' : 'numeric',  
    },
  }, 
  'CARD': {
    func: 'card',
    configInput: { ...lblOrientacao, keyboardType: 'numeric' },
  }, 
  'PHONE': {
    func: 'phone',
    configInput: { 
      ...lblOrientacao, 
      maxLength: 9,
      keyboardType: 'numeric' 
    },
  }, 
  'PHONE-DDD': {
    func: 'phone_dd',
    configInput: { 
      ...lblOrientacao, 
      maxLength: 15,
      keyboardType: 'numeric' 
    },
  }, 
  'PLAQUE': {
    func: 'plaque',
    configInput: { 
      ...lblOrientacao,
      maxLength: 8,
      ...configTextCase,
    },
  },   
  'RAMAL': {
    func: 'ramal',
    configInput: { ...lblOrientacao, ...num_with_eigth },
  }, 
  'STRING-LOW': {
    func: 'string_low',
    configInput: { ...lblOrientacao, ...configTextCase },
  }, 
  'STRING-UP': {
    func: 'string_up',
    configInput: { ...lblOrientacao, ...configTextCase },
  }, 
  'PASSWORD': {
    func: 'password',
    configInput: { 
      ...lblOrientacao, 
      keyboardType: Platform.OS === 'ios' ? null : 'visible-password',
    },
  },             
  'EMAIL': {
    func: 'email',
    configInput: { 
      ...lblOrientacao, 
      keyboardType: 'email-address',
    },
  }, 
};


export default {
  types,
};