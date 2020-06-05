import React from 'react';
import { Platform } from 'react-native';


function createCommons() {
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

  const letters_numbers = {
    'only-letter': 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    'only-number': '0123456789',
  };

  function filterValue(value, type, start, end) {
    const strFind = letters_numbers[type];
    const setValue = start + end >= 0 ? value.substr(start, end) : value;
  
    let newValue = '';
    for (let i = 0; i < setValue.length; i++) {
      if (strFind.indexOf(setValue[i].toUpperCase()) >= 0) {
        newValue += setValue[i];
      };
    };
  
    return newValue;
  };

  return {
    configTextCase,
    num_with_five,
    num_with_eigth,
    lblOrientacao,
    letters_numbers,
    filterValue,
  }
}

export default createCommons;
