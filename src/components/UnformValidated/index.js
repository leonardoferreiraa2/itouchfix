import React, { useEffect, useRef, useState } from 'react';

import { Text, TextInput } from 'react-native';
import { useField } from '@unform/core';

import Fun from './Validations';

function Input({name, ...rest}) {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue, error} = useField(name);
  
  const [maskValue, setMaskValue] = useState('');

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        setMaskValue('');
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (maskValue !== '' && maskValue !== inputRef.current.value) {
      inputRef.current.value = maskValue;
    }
  }, [maskValue]);


  // const [secureTextEntry, setSecureTextEntry] = useState('');
  // const [keyboardType, setKeyboardType] = useState('');
  // const [autoCapitalize, setAutoCapitalize] = useState('');
  // const [maxLength, setMaxLength] = useState('');
  // useEffect(() => {
  //   setSecureTextEntry(getConfig('secureTextEntry'));
  //   setKeyboardType(getConfig('keyboardType'));
  //   setAutoCapitalize(getConfig('autoCapitalize')); 
  //   setMaxLength(getConfig('maxLength')); 
  // }, []);

  const getConfig = nameConfig => {
    const type = {...rest}.type !== undefined ? 
      {...rest}.type.toUpperCase() : '';
  
    if (Object.keys(Fun.types).indexOf(type) === -1) return null;

    const configs = Fun.types[type].configInput;
    const config = configs[nameConfig];

    return config !== null ? config : null;
  };

  const getValidation = value => {
    const props = {
      type: {...rest}.type,
      value: value,
    };

    return Fun.getMaskValue(props);
  };

  return (
    <TextInput
      ref={inputRef}

      secureTextEntry={getConfig('secureTextEntry')} 
      keyboardType={getConfig('keyboardType')} 
      autoCapitalize={getConfig('autoCapitalize')} 
      maxLength={getConfig('maxLength')} 

      defaultValue={defaultValue}
      onChangeText={value => {
        setMaskValue(getValidation(value));
      }}
      value={maskValue}
      {...rest}
    />
  );
}


export default Input;
