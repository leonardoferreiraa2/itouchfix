import React, { useEffect, useRef, useState } from 'react';

import { View, Text, TextInput } from 'react-native';
import { useField } from '@unform/core';

import createValidations from './Validations';

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

  const getConfig = nameConfig => {
    const Fun = createValidations();
    const types = Fun.types;
    const type = {...rest}.type !== undefined ? 
      {...rest}.type.toUpperCase() : '';
  
    if (Object.keys(types).indexOf(type) === -1) return null;

    const configs = types[type].configInput;
    const config = configs[nameConfig];

    return config !== null ? config : null;
  };

  const getValidation = value => {
    const Fun = createValidations();
    const props = {
      type: {...rest}.type,
      value: value,
    };

    return Fun.getMaskValue(props);
  };

  const config = {...rest};
  const keys = Object.keys(config);
  
  Object.assign(config, { secureTextEntry: getConfig('secureTextEntry') })
  Object.assign(config, { keyboardType: getConfig('keyboardType') })
  Object.assign(config, { autoCapitalize: getConfig('autoCapitalize') })
  Object.assign(config, { maxLength: getConfig('maxLength') })

  if (keys.indexOf('placeholder') === -1) 
    Object.assign(config, { placeholder: getConfig('placeholder') })

  return (
    <View>
      <Text>{ {...rest}.label }</Text>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          setMaskValue(getValidation(value));
        }}
        value={maskValue}
        {...config}
      />
    </View>
  );
}


export default Input;
