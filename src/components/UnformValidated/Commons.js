import React from 'react';
import { Platform } from 'react-native';


function createCommons() {
  const configTextCase = {
    secureTextEntry: Platform.OS === 'ios' ? false : true, 
    keyboardType: Platform.OS === 'ios' ? null : 'visible-password',
    autoCapitalize: 'characters', 
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

  function formatMask(value, mask) {
    let newValue = '';
    let l = 0;

    for (let i = 0; i < mask.length; i++) {
      if (l >= value.length || value === '') { break; }
      if (mask[i] != 9) {
        newValue += mask[i];
      } else {
        newValue += value[l];
        l++;
      };
    };

    return newValue;
  };

  function getObjKeyForIndex(objTypes, i) {
    const index = Object.keys(objTypes); // get keys do obj e converte em array
    return String(index[i]); // get o index do array, conforme passado
  };

  return {
    configTextCase,
    lblOrientacao,
    letters_numbers,
    filterValue,
    formatMask,
    getObjKeyForIndex,
  }
}

export default createCommons;
