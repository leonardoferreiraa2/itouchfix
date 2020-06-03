import React from 'react';
import { Platform } from 'react-native';


function createTypes() {
  // ################## COMUNS
  const configTextCase = {
    secureTextEntry: Platform.OS === 'ios' ? false : true, 
    keyboardType: Platform.OS === 'ios' ? null : 'visible-password',
    autoCapitalize: 'characters', 
  };

  const num_with_five = {
    maxLength: 5,
    keyboardType: 'numeric',
    placeholder: 'hh:mm',
  };

  const num_with_eigth = {
    maxLength: 8,
    keyboardType: 'numeric',
    placeholder: 'hh:mm:ss',
  };

  const lblOrientacao = {
    lblLeft: '',
    lblRight: '',
  };
  
  const types = {
    'CEP': {
      func: 'cep',
      configInput: { 
        ...lblOrientacao,
        maxLength: 10,
        keyboardType: 'numeric',
        placeholder: '00.000-000',
      },
    }, 
    'CNPJ': {
      func: 'cnpj',
      configInput: { 
        ...lblOrientacao,
        maxLength: 18,
        keyboardType: 'numeric',
        placeholder: '00.000.000/0000-00',
      },
    }, 
    'CPF': {
      func: 'cpf',
      configInput: { 
        ...lblOrientacao,
        maxLength: 14,
        keyboardType: 'numeric',
        placeholder: '000.000.000-00',
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
        placeholder: 'dd/mm/yyyy',
      },
    },
    'DD/MM/YYYY HH:MM': {
      func: 'dd_mm_yy_hh_mm',
      configInput: { 
        ...lblOrientacao,
        maxLength: 16,
        keyboardType: 'numeric',
        placeholder: 'dd/mm/yyyy hh:mm',
      },
    },
    'DD/MM/YYYY HH:MM:SS': {
      func: 'dd_mm_yy_hh_mm_ss',
      configInput: { 
        ...lblOrientacao,
        maxLength: 19,
        keyboardType: 'numeric',
        placeholder: 'dd/mm/yyyy hh:mm:ss',
      },
    },  
    'GENERAL': {
      func: 'general',
      configInput: { 
        ...lblOrientacao, 
        keyboardType: 'numeric',
        placeholder: '0',
      },
    }, 
    'DECIMAL': {
      func: 'decimal',
      configInput: { 
        ...lblOrientacao, 
        keyboardType: Platform.OS === 'ios' ? 'decimal-pad' : 'numeric', 
        placeholder: '0.00',
      },
    }, 
    'CURRENCY': {
      func: 'currency',
      configInput: { 
        ...lblOrientacao, 
        keyboardType: 'numeric',
        placeholder: '$0.00',
      },
    }, 
    'PERCENT': {
      func: 'percent',
      configInput: { 
        ...lblOrientacao, 
        keyboardType: Platform.OS === 'ios' ? 'decimal-pad' : 'numeric', 
        placeholder: '%0.00', 
      },
    }, 
    'CARD': {
      func: 'card',
      configInput: { 
        ...lblOrientacao, 
        keyboardType: 'numeric',
        placeholder: '0000 0000 0000 0000',
      },
    }, 
    'PHONE': {
      func: 'phone',
      configInput: { 
        ...lblOrientacao, 
        maxLength: 9,
        keyboardType: 'numeric',
        placeholder: '0000-0000',
      },
    }, 
    'PHONE-DDD': {
      func: 'phone_dd',
      configInput: { 
        ...lblOrientacao, 
        maxLength: 15,
        keyboardType: 'numeric',
        placeholder: '(00) 0000-0000',
      },
    }, 
    'PLAQUE': {
      func: 'plaque',
      configInput: { 
        ...lblOrientacao,
        maxLength: 8,
        ...configTextCase,
        placeholder: 'AAA-0A00',
      },
    },   
    'RAMAL': {
      func: 'ramal',
      configInput: { 
        ...lblOrientacao, 
        maxLength: 8,
        keyboardType: 'numeric',
        placeholder: '000-0000',
      },
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
        placeholder: '******',
      },
    },             
    'EMAIL': {
      func: 'email',
      configInput: { 
        ...lblOrientacao, 
        keyboardType: 'email-address',
        placeholder: 'Email',
      },
    }, 
  }

  return {
    types
  }
}


export default createTypes;
