/*
  string-low = letras minísculas
  string-up = letras maiúsculas
  password = password
  email = email

  retornar password como ***
  validar email

*/

import createCommons from '../Commons';


function createString() {
  function typesString() {
    const Commons = createCommons();
    return {
      'STRING-LOW': {
        func: 'string_low',
        configInput: { ...Commons.lblOrientacao, ...Commons.configTextCase },
      }, 
      'STRING-UP': {
        func: 'string_up',
        configInput: { ...Commons.lblOrientacao, ...Commons.configTextCase },
      }, 
      'PASSWORD': {
        func: 'password',
        configInput: { 
          ...Commons.lblOrientacao, 
          keyboardType: Platform.OS === 'ios' ? null : 'visible-password',
          placeholder: '******',
        },
      },             
      'EMAIL': {
        func: 'email',
        configInput: { 
          ...Commons.lblOrientacao, 
          keyboardType: 'email-address',
          placeholder: 'Email',
        }
      }
    }
  };

  function get_string_up(value) {
    return value.toUpperCase();
  };
  
  function get_string_low(value) {
    return value.toLowerCase();
  };
  
  function get_password(value) {
    return value;
  };
  
  function get_email(value) {
    return value;
  };

  return {
    get_string_up,
    get_string_low,
    get_password,
    get_email,
    typesString
  }
}


export default createString;
